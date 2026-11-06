import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function downloadOnePagePdf(elementId: string, filename: string): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found.`);
    return false;
  }

  try {
    // 1. Wait for all images inside element to be loaded
    const images = element.getElementsByTagName('img');
    const imagePromises: Promise<void>[] = [];
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (!img.complete) {
        imagePromises.push(
          new Promise((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
        );
      }
    }
    await Promise.all(imagePromises);

    // 2. High-clarity canvas capture with exact A4 dimensions
    const canvas = await html2canvas(element, {
      scale: 2.5, // 2.5x crisp resolution for sharp print
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#FFFFFF',
      logging: false,
      width: 794,
      height: 1123,
      scrollX: 0,
      scrollY: 0,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.96);

    // 3. A4 Portrait dimensions in mm: 210mm x 297mm
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = 210;
    const pageHeight = 297;

    pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating 1-page PDF:', error);
    return false;
  }
}
