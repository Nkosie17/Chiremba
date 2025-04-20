import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ReportData {
  date: string;
  time: string;
  condition: string;
  confidence: number;
  description: string;
  urgency: string;
  modelUsed: string;
  imageData: string;
  alternatives?: Array<{class: string, confidence: number}>;
  aiExplanation?: string;
}

export const downloadReport = async (data: ReportData) => {
  const element = document.createElement('div');
  element.className = 'report-container';
  element.innerHTML = `
    <style>
      .report-container {
        font-family: 'Arial', sans-serif;
        max-width: 750px;
        margin: 0 auto;
        padding: 20px;
        color: #333;
        font-size: 14px;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #4f46e5;
      }
      .header h1 {
        color: #4f46e5;
        margin: 0;
        font-size: 20px;
      }
      .header p {
        color: #666;
        margin: 5px 0;
        font-size: 12px;
      }
      .section {
        margin-bottom: 20px;
      }
      .section-title {
        color: #4f46e5;
        font-size: 16px;
        margin-bottom: 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid #e5e7eb;
      }
      .result-box {
        background-color: #f8fafc;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 15px;
      }
      .result-box h3 {
        font-size: 14px;
        margin: 0 0 8px 0;
      }
      .result-box p {
        margin: 6px 0;
        line-height: 1.4;
      }
      .confidence-bar {
        height: 6px;
        background-color: #e5e7eb;
        border-radius: 3px;
        margin: 8px 0;
        overflow: hidden;
      }
      .confidence-fill {
        height: 100%;
        background-color: #4f46e5;
        border-radius: 3px;
      }
      .image-container {
        text-align: center;
        margin: 15px 0;
      }
      .image-container img {
        max-width: 100%;
        max-height: 250px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .ai-analysis {
        background-color: #f0f9ff;
        border: 1px solid #e0f2fe;
        border-radius: 8px;
        padding: 12px;
        margin-top: 15px;
      }
      .ai-analysis h3 {
        color: #0369a1;
        margin: 0 0 8px 0;
        font-size: 14px;
      }
      .ai-section {
        margin-bottom: 12px;
      }
      .ai-section h4 {
        color: #0369a1;
        margin: 0 0 4px 0;
        font-size: 13px;
      }
      .ai-section p {
        margin: 4px 0;
        line-height: 1.4;
      }
      .footer {
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #e5e7eb;
        font-size: 11px;
        color: #666;
      }
      p {
        margin: 0 0 8px 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .page-break {
        break-after: page;
        page-break-after: always;
      }
      @page {
        margin: 20mm;
      }
    </style>

    <div class="header">
      <h1>Chiremba Image Diagnosis Report</h1>
      <p>Generated on ${data.date} at ${data.time}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Analysis Results</h2>
      <div class="result-box">
        <h3>Detected Condition: ${data.condition}</h3>
        <p>${data.description}</p>
        <div class="confidence-bar">
          <div class="confidence-fill" style="width: ${data.confidence}%"></div>
        </div>
        <p>Confidence Level: ${data.confidence}%</p>
        <p>Model Used: ${data.modelUsed}</p>
      </div>
    </div>

    <div class="image-container">
      <img src="${data.imageData}" alt="Analyzed Image" />
    </div>

    <div class="ai-analysis">
      <h3>AI Detailed Analysis</h3>
      ${data.aiExplanation ? data.aiExplanation.split('\n').map(paragraph => {
        const cleanText = paragraph.replace(/\*\*/g, '');
        if (cleanText.match(/^\d+\.\s+[A-Za-z\s]+:/)) {
          return `<div class="ai-section">
            <h4>${cleanText.replace(/^\d+\.\s+/, '')}</h4>
          </div>`;
        } else if (cleanText.trim()) {
          return `<p>${cleanText}</p>`;
        }
        return '';
      }).join('') : '<p>AI analysis not available</p>'}
    </div>

    ${data.alternatives && data.alternatives.length > 0 ? `
      <div class="section">
        <h2 class="section-title">Alternative Diagnoses</h2>
        <div class="result-box">
          ${data.alternatives.map(alt => `
            <div style="margin-bottom: 10px;">
              <p><strong>${alt.class}</strong> (${alt.confidence}% confidence)</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div class="footer">
      <p>This report was generated using AI-assisted analysis. Please consult with a qualified healthcare professional for proper evaluation and treatment.</p>
    </div>
  `;

  document.body.appendChild(element);
  
  const canvas = await html2canvas(element, {
    scale: 2,
    logging: false,
    useCORS: true,
    allowTaint: true,
    windowHeight: element.scrollHeight
  });
  
  document.body.removeChild(element);

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');
  
  const pageWidth = 210;
  const pageHeight = 297;
  const safeMargin = 15;
  
  const contentWidth = pageWidth - (safeMargin * 2);
  const aspectRatio = canvas.height / canvas.width;
  const contentHeight = contentWidth * aspectRatio;
  
  let heightLeft = contentHeight;
  let position = safeMargin;
  let page = 1;

  const pageContentHeight = pageHeight - (safeMargin * 2);

  pdf.addImage(imgData, 'JPEG', safeMargin, position, contentWidth, contentHeight);
  heightLeft -= pageContentHeight;

  while (heightLeft > 0) {
    pdf.addPage();
    page++;
    position = -(pageContentHeight * (page - 1)) + safeMargin;
    pdf.addImage(imgData, 'JPEG', safeMargin, position, contentWidth, contentHeight);
    heightLeft -= pageContentHeight;
  }

  pdf.save(`medical_report_${data.date.replace(/\//g, '-')}.pdf`);
};

export const printReport = (data: ReportData) => {
  const element = document.createElement('div');
  element.className = 'report-container';
  element.innerHTML = `
    <style>
      .report-container {
        font-family: 'Arial', sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        color: #333;
      }
      .header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #4f46e5;
      }
      .header h1 {
        color: #4f46e5;
        margin: 0;
        font-size: 24px;
      }
      .header p {
        color: #666;
        margin: 5px 0;
      }
      .section {
        margin-bottom: 25px;
      }
      .section-title {
        color: #4f46e5;
        font-size: 18px;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #e5e7eb;
      }
      .result-box {
        background-color: #f8fafc;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
      }
      .confidence-bar {
        height: 8px;
        background-color: #e5e7eb;
        border-radius: 4px;
        margin: 10px 0;
        overflow: hidden;
      }
      .confidence-fill {
        height: 100%;
        background-color: #4f46e5;
        border-radius: 4px;
      }
      .image-container {
        text-align: center;
        margin: 20px 0;
      }
      .image-container img {
        max-width: 100%;
        max-height: 300px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .ai-analysis {
        background-color: #f0f9ff;
        border: 1px solid #e0f2fe;
        border-radius: 8px;
        padding: 15px;
        margin-top: 20px;
      }
      .ai-analysis h3 {
        color: #0369a1;
        margin-top: 0;
      }
      .ai-section {
        margin-bottom: 15px;
      }
      .ai-section h4 {
        color: #0369a1;
        margin-bottom: 5px;
      }
      .footer {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #e5e7eb;
        font-size: 12px;
        color: #666;
      }
      @media print {
        .report-container {
          padding: 0;
        }
        .page-break {
          page-break-after: always;
        }
      }
    </style>

    <div class="header">
      <h1>Chiremba Image Diagnosis Report</h1>
      <p>Generated on ${data.date} at ${data.time}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Analysis Results</h2>
      <div class="result-box">
        <h3>Detected Condition: ${data.condition}</h3>
        <p>${data.description}</p>
        <div class="confidence-bar">
          <div class="confidence-fill" style="width: ${data.confidence}%"></div>
        </div>
        <p>Confidence Level: ${data.confidence}%</p>
        <p>Model Used: ${data.modelUsed}</p>
      </div>
    </div>

    <div class="image-container">
      <img src="${data.imageData}" alt="Analyzed Image" />
    </div>

    <div class="ai-analysis">
      <h3>AI Detailed Analysis</h3>
      ${data.aiExplanation ? data.aiExplanation.split('\n').map(paragraph => {
        const cleanText = paragraph.replace(/\*\*/g, '');
        if (cleanText.match(/^\d+\.\s+[A-Za-z\s]+:/)) {
          return `<div class="ai-section">
            <h4>${cleanText.replace(/^\d+\.\s+/, '')}</h4>
          </div>`;
        } else if (cleanText.trim()) {
          return `<p>${cleanText}</p>`;
        }
        return '';
      }).join('') : '<p>AI analysis not available</p>'}
    </div>

    ${data.alternatives && data.alternatives.length > 0 ? `
      <div class="section">
        <h2 class="section-title">Alternative Diagnoses</h2>
        <div class="result-box">
          ${data.alternatives.map(alt => `
            <div style="margin-bottom: 10px;">
              <p><strong>${alt.class}</strong> (${alt.confidence}% confidence)</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div class="footer">
      <p>This report was generated using AI-assisted analysis. Please consult with a qualified healthcare professional for proper evaluation and treatment.</p>
    </div>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(element.innerHTML);
    printWindow.document.close();
    printWindow.onload = function() {
      printWindow.print();
    };
  }
}; 