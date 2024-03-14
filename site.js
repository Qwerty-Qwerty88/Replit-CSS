let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  if (navigator.clipboard) {
    let button = document.createElement("button");
    
    button.className = "btn btn-outline-secondary btn-sm copy-btn";
    button.style = "font-family: var(--font-family)";
    button.innerText = "Copy code";
    
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block);

      button.innerText = "Copied!";
    });
  }
});

async function copyCode(block) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  
}

hljs.initHighlightingOnLoad();