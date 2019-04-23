// Copy AtCoder sample test code to clipboard for test macro of Rust
//
// example (ABC123 sample_1):
//
// r"29
// 20
// 7
// 35
// 120
// " => r"215",
//

const main = () => {
  const samplePairs = getSamplePairs();
  if (samplePairs.length < 1) {
    return;
  }
  // 日本語と英語それぞれに同じサンプル要素があるので半分だけ使う
  const halfSamplePairs = samplePairs.slice(0, samplePairs.length / 2);
  const testCodeText = toCodeFromSamplePairs(halfSamplePairs);
  console.log(testCodeText);
  generateElements(testCodeText);
};

// 入出力サンプルペア要素を [[inputElement, outputElement], ...] の形で取得
const getSamplePairs = () => {
  let samplePairs = [];
  let num = 0;
  while ((input = document.getElementById(`pre-sample${num++}`))) {
    output = document.getElementById(`pre-sample${num++}`);
    samplePairs.push([input, output]);
  }
  return samplePairs;
};

// 入出力サンプルペアをテストコードに変換
const toCodeFromSamplePair = samplePair => {
  const [input, output] = samplePair;
  return `r"${input.innerText}" => r"${output.innerText.trim()}"`;
};

// 入出力サンプルペアのリストからテストコードに変換
const toCodeFromSamplePairs = samplePairs => {
  return samplePairs.map(toCodeFromSamplePair).join(',\n\n');
};

// コピーボタンとコピー内容(テストコード)の要素を生成する
const generateElements = testCodeText => {
  const button = document.createElement('button');
  button.innerText = 'Copy sample test code';
  button.addEventListener('click', () => {
    document.getSelection().selectAllChildren(testCodeElement);
    document.execCommand('copy');
    const p = document.createElement('p');
    p.innerText = 'Copied!!!';
    p.style = 'color: blue;';
    wrapper.appendChild(p);
  });

  const testCodeElement = document.createElement('pre');
  testCodeElement.innerText = testCodeText;

  const wrapper = document.createElement('div');
  wrapper.appendChild(button);
  wrapper.appendChild(testCodeElement);

  const root = document.getElementById('task-statement');
  root.appendChild(wrapper);
};

main();
