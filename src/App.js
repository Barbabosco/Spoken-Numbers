import React from "react";

function App() {
  const [minNumIncluded, setMinNumIncluded] = React.useState(0);
  const [maxNumIncluded, setMaxNumIncluded] = React.useState(99);
  // const  [quantity, setQuantity] = React.useState(4);
  const [delay, setDelay] = React.useState(30);
  const [isRunning, setIsRunning] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [colorIndex, setColorIndex] = React.useState(0);
  const [sequence, setSequence] = React.useState([]);
  const [sequenceLimit, setSequenceLimit] = React.useState(10);
  const [showSequence, setShowSequence] = React.useState(false);

  function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    // Remember the latest callback.
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    function () {
      setCounter(function () {
        return counter + 1;
      });
      console.log(`counter: ${counter}`);
      setColorIndex(function () {
        if (colorIndex === 9) {
          return 0;
        } else {
          return colorIndex + 1;
        }
      });
      const lastRandomNum =
        Math.floor(Math.random() * (maxNumIncluded + 1 - minNumIncluded)) +
        minNumIncluded;

      setSequence([...sequence, lastRandomNum]);
    },
    isRunning ? delay * 100 : null
  );

  const delayChange = (event) => {
    setDelay(event.target.value);
  };

  const sequenceLimitChange = (event) => {
    setSequenceLimit(event.target.value);
  };

  const minNumIncludedChange = (event) => {
    setMinNumIncluded(Number(event.target.value));
  };

  const maxNumIncludedChange = (event) => {
    setMaxNumIncluded(Number(event.target.value));
  };

  const handleStart = () => {
    setSequence([]);
    setShowSequence(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setCounter(0);
  };

  const handleShowSequence = () => {
    setShowSequence(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Spoken words</h1>
      </header>
      <section>
        <h3>Settings</h3>
        <div style={{ margin: "0.75rem 0rem" }}>
          Delay (deciseconds)&nbsp;
          <button
            onClick={() => {
              setDelay(delay - 1);
            }}
          >
            -
          </button>
          &nbsp;
          <input
            type="text"
            value={delay}
            onChange={delayChange}
            maxLength="2"
            style={{ width: "50px" }}
          />
          &nbsp;
          <button
            onClick={() => {
              setDelay(delay + 1);
            }}
          >
            -
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              setDelay(10);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            10
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(15);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            15
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(20);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            20
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(25);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            25
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(30);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            30
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(35);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            35
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(40);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            40
          </button>{" "}
          &nbsp;
          <button
            onClick={() => {
              setDelay(45);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            45
          </button>
          &nbsp;
          <button
            onClick={() => {
              setDelay(50);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            50
          </button>
        </div>

        <div style={{ margin: "0.75rem 0rem" }}>
          Sequence length &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(sequenceLimit - 1);
            }}
          >
            -
          </button>
          &nbsp;
          <input
            type="text"
            value={sequenceLimit}
            onChange={sequenceLimitChange}
            maxLength="2"
            style={{ width: "50px" }}
          />
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(sequenceLimit + 1);
            }}
          >
            -
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              setSequenceLimit(5);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            5
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(10);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            10
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(15);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            15
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(20);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            20
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(25);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            25
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(30);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            30
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(35);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            35
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(40);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            40
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(45);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            45
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(50);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            50
          </button>
        </div>

        <div style={{ margin: "0.75rem 0rem" }}>
          Min number &nbsp;
          <input
            type="text"
            value={minNumIncluded}
            onChange={minNumIncludedChange}
            maxLength="2"
            style={{ width: "50px" }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max nunber&nbsp;
          <input
            type="text"
            value={maxNumIncluded}
            onChange={maxNumIncludedChange}
            maxLength="2"
            style={{ width: "50px" }}
          />
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              setMaxNumIncluded(9);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            9
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMaxNumIncluded(99);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            99
          </button>
        </div>
      </section>
      <section>
        <div>
          <button onClick={handleStart} style={{ backgroundColor: "green" }}>
            start
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleStop} style={{ backgroundColor: "red" }}>
            stop
          </button>
        </div>
      </section>
      <section>
        <div>
          <Display sequence={sequence} colorIndex={colorIndex} />
        </div>
        <div style={{ textAlign: "right" }}>
          <p>{isRunning ? `${sequence.length} / ${sequenceLimit}` : null}</p>
        </div>
      </section>
      <section>
        <div>
          {!isRunning && sequence.length > 0 ? (
            <button onClick={handleShowSequence}>Show last sequence</button>
          ) : null}
          <p>
            <br />
            {showSequence
              ? sequence.map((each, index, currArray) => {
                  return (
                    <span key={`abdd${each}${index}`}>
                      {each}
                      {(index + 1) % 10 === 0 ? (
                        <br />
                      ) : index === currArray.length - 1 ? (
                        ""
                      ) : (
                        " - "
                      )}
                    </span>
                  );
                })
              : null}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

function Display({ sequence, colorIndex }) {
  let colors = [
    "brown",
    "darkblue",
    "darkgreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darkslateblue",
    "darkviolet",
    "forestgreen",
    "darkmagenta",
  ];

  return (
    <React.Fragment>
      <h2 style={{ fontSize: "100px", color: colors[colorIndex] }}>
        {sequence.length === 0 ? "--" : sequence[sequence.length - 1]}
      </h2>
    </React.Fragment>
  );
}
