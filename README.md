# Write a link to the clipboard using JavaScript

A reference for how to copy a link to the clipboard using JavaScript.

When a link is copied from a web page and posted into rich-text environments such as a Microsoft Word document or Slack message, it remains as a link and can be followed from the new environment (for example by using Ctrl + Click in Word). We may want to programatically send such links to the clipboard using JavaScript. This repository contains code samples demonstrating how to do so.

When the content of the clipboard is pasted into an environment that doesn't support rich text, such as Notepad, only the link text should be pasted.

## References

[This answer](https://stackoverflow.com/a/69110972/17568469) to [Javascript - Copy string to clipboard as text/html](https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html)