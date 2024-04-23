function downloadPDF()
{
  console.log("download cv");
  var cvFile = 'resume.pdf';
  // Creating an anchor element to trigger the download
  var downloadLink = document.createElement('a');
  downloadLink.href = cvFile;
  downloadLink.click();

}