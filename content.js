    function copyLink() {
      /**
       * Write a link to the clipboard
       */
      var text = "Google"
      var url = "https://www.google.com"
      var typeHtml = "text/html";
      var typePlain = "text/plain";
      var blobHtml = new Blob([`<a href=${url}>${text}</a>`], { type: typeHtml });
      var blobPlain = new Blob([text], { type: typePlain });
      myClipboardItem = new ClipboardItem({
        [typeHtml]: blobHtml,
        [typePlain]: blobPlain
      });
      var data = [myClipboardItem];

      navigator.clipboard.write(data).then(
        function () {
          console.log("Link written to clipboard")
        },
        function () {
          console.log("Failed to write to clipboard")
        }
      );
    }