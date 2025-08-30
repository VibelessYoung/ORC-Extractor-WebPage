// DATA

const fileInput = document.getElementById("file-upload");
    const resultBox = document.getElementById("result");

// FUNCTIONS

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (file) {
        resultBox.innerHTML = "Processing...";
        Tesseract.recognize(
          file,
          'eng+fas',
          { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
          resultBox.innerText = text;
        });
      }
    });

    function copyText() {
      navigator.clipboard.writeText(resultBox.innerText);
      alert("Text copied ✅");
    }