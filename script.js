// CultureConnect - Chrome Built-in AI Demo

const summarizeBtn = document.getElementById("summarizeBtn");
const rewriteBtn = document.getElementById("rewriteBtn");
const userInput = document.getElementById("userInput");
const outputText = document.getElementById("outputText");

async function summarizeText() {
  outputText.innerText = "Summarizing with Chrome AI...";
  const text = userInput.value;

  try {
    const summarizer = await ai.summarizer.create();
    const result = await summarizer.summarize(text);
    outputText.innerText = result.summary || "Could not generate summary.";
  } catch (error) {
    outputText.innerText = "Summarizer not available on this browser.";
    console.error(error);
  }
}

async function rewriteText() {
  outputText.innerText = "Rewriting with Chrome AI...";
  const text = userInput.value;

  try {
    const rewriter = await ai.rewriter.create();
    const result = await rewriter.rewrite(text);
    outputText.innerText = result.rewritten || "Could not rewrite text.";
  } catch (error) {
    outputText.innerText = "Rewriter not available on this browser.";
    console.error(error);
  }
}

summarizeBtn.addEventListener("click", summarizeText);
rewriteBtn.addEventListener("click", rewriteText);
