import React from "react";

function App() {
  const [minNumIncluded, setMinNumIncluded] = React.useState(0);
  const [maxNumIncluded, setMaxNumIncluded] = React.useState(99);
  // const  [quantity, setQuantity] = React.useState(4);
  const [delay, setDelay] = React.useState(20);
  const [isRunning, setIsRunning] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [colorIndex, setColorIndex] = React.useState(0);
  const [sequence, setSequence] = React.useState([]);
  const [sequenceLimit, setSequenceLimit] = React.useState(10);
  const [showSequence, setShowSequence] = React.useState(false);
  // const [playAudio, setPlayAudio] = React.useState(true);
  const [showNumbers, setShowNumbers] = React.useState(true);

  // const audio0 = new Audio("/num0.mp3");
  // const audio1 = new Audio("/num1.mp3");
  // const audio2 = new Audio("/num2.mp3");
  // const audio3 = new Audio("/num3.mp3");
  // const audio4 = new Audio("/num4.mp3");
  // const audio5 = new Audio("/num5.mp3");
  // const audio6 = new Audio("/num6.mp3");
  // const audio7 = new Audio("/num7.mp3");
  // const audio8 = new Audio("/num8.mp3");
  // const audio9 = new Audio("/num9.mp3");

  // const playNum0 = () => {
  //   audio0.play();
  // };
  // const playNum1 = () => {
  //   audio1.play();
  // };
  // const playNum2 = () => {
  //   audio2.play();
  // };
  // const playNum3 = () => {
  //   audio3.play();
  // };
  // const playNum4 = () => {
  //   audio4.play();
  // };
  // const playNum5 = () => {
  //   audio5.play();
  // };
  // const playNum6 = () => {
  //   audio6.play();
  // };
  // const playNum7 = () => {
  //   audio7.play();
  // };
  // const playNum8 = () => {
  //   audio8.play();
  // };
  // const playNum9 = () => {
  //   audio9.play();
  // };

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
      // if (0 <= lastRandomNum && lastRandomNum <= 9) {
      //   switch (lastRandomNum) {
      //     case 0:
      //       playNum0();
      //       break;
      //     case 1:
      //       playNum1();
      //       break;
      //     case 2:
      //       playNum2();
      //       break;
      //     case 3:
      //       playNum3();
      //       break;
      //     case 4:
      //       playNum4();
      //       break;
      //     case 5:
      //       playNum5();
      //       break;
      //     case 6:
      //       playNum6();
      //       break;
      //     case 7:
      //       playNum7();
      //       break;
      //     case 8:
      //       playNum8();
      //       break;
      //     default:
      //       playNum9();
      //       break;
      //   }
      // }
      if (sequence.length + 1 === sequenceLimit) {
        handleStop();
      }
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

  // const handlePlayAudio = () => {
  //   setPlayAudio(!playAudio);
  // };

  const handleShowNumbers = () => {
    setShowNumbers(!showNumbers);
  };

  return (
    <div className="App">
      <header>
        <h1>Spoken words</h1>
      </header>
      <section>
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
            +
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
            +
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
              setSequenceLimit(50);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            50
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(75);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            75
          </button>
          &nbsp;
          <button
            onClick={() => {
              setSequenceLimit(100);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            100
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

        {/* inizio sezione */}
        <div>
        <button
            onClick={() => {
              setMinNumIncluded(0);
              setMaxNumIncluded(9);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            0-9
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(10);
              setMaxNumIncluded(19);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            10-19
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(20);
              setMaxNumIncluded(29);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            20-29
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(30);
              setMaxNumIncluded(39);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            30-39
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(40);
              setMaxNumIncluded(49);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            40-49
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(50);
              setMaxNumIncluded(59);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            50-59
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(60);
              setMaxNumIncluded(69);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            60-69
          </button>                              
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(70);
              setMaxNumIncluded(79);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            70-79
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(80);
              setMaxNumIncluded(89);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            80-89
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(90);
              setMaxNumIncluded(99);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            90-99
          </button>                    
        </div>
        <div>
          <button
            onClick={() => {
              setMinNumIncluded(0);
              setMaxNumIncluded(19);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            0-19
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(20);
              setMaxNumIncluded(39);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            20-39
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(40);
              setMaxNumIncluded(59);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            40-59
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(60);
              setMaxNumIncluded(79);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            70-79
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(80);
              setMaxNumIncluded(99);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            80-99
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(10);
              setMaxNumIncluded(29);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            10-29
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(30);
              setMaxNumIncluded(49);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            30-49
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(50);
              setMaxNumIncluded(69);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            50-69
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(70);
              setMaxNumIncluded(89);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            70-89
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(90);
              setMaxNumIncluded(9);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            90-9
          </button>
          &nbsp;                                                  
        </div>
        {/* fine sezione */}


        {/* inizio sezione */}
        <div>
        <button
            onClick={() => {
              setMinNumIncluded(5);
              setMaxNumIncluded(14);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            5-14
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(15);
              setMaxNumIncluded(24);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            15-24
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(25);
              setMaxNumIncluded(34);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            25-34
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(35);
              setMaxNumIncluded(44);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            35-44
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(45);
              setMaxNumIncluded(54);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            45-54
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(55);
              setMaxNumIncluded(64);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            55-64
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(65);
              setMaxNumIncluded(74);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            65-74
          </button>                              
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(75);
              setMaxNumIncluded(84);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            75-84
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(85);
              setMaxNumIncluded(94);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            85-94
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(95);
              setMaxNumIncluded(104);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            95-104
          </button>                    
        </div>
        <div>
          <button
            onClick={() => {
              setMinNumIncluded(5);
              setMaxNumIncluded(24);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            5-24
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(25);
              setMaxNumIncluded(44);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            25-44
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(45);
              setMaxNumIncluded(64);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            45-64
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(65);
              setMaxNumIncluded(84);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            65-84
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(85);
              setMaxNumIncluded(4);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            85-4
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(15);
              setMaxNumIncluded(34);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            15-34
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(35);
              setMaxNumIncluded(54);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            35-54
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(55);
              setMaxNumIncluded(74);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            55-74
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(75);
              setMaxNumIncluded(94);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            75-94
          </button>
          &nbsp;
          <button
            onClick={() => {
              setMinNumIncluded(95);
              setMaxNumIncluded(14);
            }}
            style={{
              fontSize: "0.6rem",
              padding: "0.4rem",
            }}
          >
            95-14
          </button>
          &nbsp;                                                  
        </div>
        {/* fine sezione */}





        <div>
          {/* Play audio (only 0-9)&nbsp;
          <input
            type="checkbox"
            checked={playAudio}
            onChange={handlePlayAudio}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
          Show numbers&nbsp;
          <input
            type="checkbox"
            checked={showNumbers}
            onChange={handleShowNumbers}
          />
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
          <Display
            sequence={sequence}
            showNumbers={showNumbers}
            colorIndex={colorIndex}
          />
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

function Display({ sequence, colorIndex, showNumbers }) {
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
      <h2
        style={{
          fontSize: "100px",
          color: colors[colorIndex],
          backgroundColor: "#dddddd",
          padding: "10px 20px",
          textAlign: "center",
          width: "150px",
        }}
      >
        {sequence.length === 0 || !showNumbers ? (
          <span style={{ color: "#000" }}>--</span>
        ) : (
          sequence[sequence.length - 1]
        )}
      </h2>
    </React.Fragment>
  );
}
