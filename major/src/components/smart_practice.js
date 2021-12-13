import React, { useState } from "react";
import Chart from "react-google-charts";
import "./css/smart_practice.css";
import Navbar from "./routes/Navbar";
function Smart_practice() {
  const [handle, sethandle] = useState("");
  const [statusinfo, setstatusinfo] = useState({
    status: "OK",
    result: [
      {
        id: 1,
        contestId: 1,
        creationTimeSeconds: 3,
        relativeTimeSeconds: 3,
        problem: {
          contestId: 2,
          index: "",
          name: "",
          type: "",
          points: 15,
          rating: 24,
          tags: [
            "binary search",
            "brute force",
            "dp",
            "greedy",
            "two pointers",
          ],
        },
        programmingLanguage: "GNU C++17",
        verdict: "TIME_LIMIT_EXCEEDED",
      },
    ],
  });

  const [userinfo, setuserinfo] = useState({
    status: "OK",
    result: [
      {
        lastName: "",
        country: "",
        lastOnlineTimeSeconds: 3,
        city: "",
        rating: 7,
        friendOfCount: 7,
        titlePhoto: "https://userpic.codeforces.org/no-title.jpg",
        handle: "",
        avatar:
          "https://userpic.codeforces.org/422/avatar/2b5dbe87f0d859a2.jpg",
        firstName: "",
        contribution: 1,
        organization: "ITMO",
        rank: "master",
        maxRating: 3822,
        registrationTimeSeconds: 8,
        maxRank: "",
      },
    ],
  });
  const [submitting, setSubmitting] = useState(false);

  //for 1st pie chart
  const [ac, setac] = useState(0);
  const [part, setpart] = useState(0);
  const [wa, setwa] = useState(0);
  const [rte, setrte] = useState(0);
  const [mle, setmle] = useState(0);
  const [tle, settle] = useState(0);
  const [other, setother] = useState(0);

  //for 2nd pie chart
  const [dp, setdp] = useState(0);
  const [greedy, setgreedy] = useState(0);
  const [dac, setdac] = useState(0);
  const [twoptr, settwoptr] = useState(0);
  const [math, setmath] = useState(0);
  const [dfs, setdfs] = useState(0);
  const [trees, settrees] = useState(0);
  const [strings, setstrings] = useState(0);
  const [graphs, setgraphs] = useState(0);
  const [others, setothers] = useState(0);

  //for 3rd pie chart
  const [wdp, setwdp] = useState(0);
  const [wgreedy, setwgreedy] = useState(0);
  const [wdac, setwdac] = useState(0);
  const [wtwoptr, setwtwoptr] = useState(0);
  const [wmath, setwmath] = useState(0);
  const [wdfs, setwdfs] = useState(0);
  const [wtrees, setwtrees] = useState(0);
  const [wstrings, setwstrings] = useState(0);
  const [wgraphs, setwgraphs] = useState(0);
  const [wothers, setwothers] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchuserdata();
    setSubmitting(true);
  };

  const handleChange = (event) => {
    sethandle(event.target.value);
  };

  const fetchuserdata = async () => {
    //calling API to get USER INFO
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=` + handle
    );
    const data = await response.json();
    if (data.status === "OK") {
      setuserinfo((prev) => {
        return data;
      });
    }
    // console.log(data);

    //Now calling API to get STATUS OF 500 SUBMISSIONS
    const response2 = await fetch(
      `https://codeforces.com/api/user.status?handle=` +
        handle +
        `&from=1&count=500`
    );
    const data2 = await response2.json();
    if (data2.status === "OK") {
      setstatusinfo((prev) => {
        return data2;
      });
    }
    // console.log(data2);

    //count the verdicts
    countverdicts();
  };

  //function to count the no of. verdicts
  const countverdicts = () => {
    var part_count = 0;
    var ac_count = 0;
    var wa_count = 0;
    var tle_count = 0;
    var rte_count = 0;
    var mle_count = 0;
    var other_count = 0;

    // dp,greedy,dac, twoptr, math , dfs , trees , strings , graphs , others
    var dpc = 0;
    var greedyc = 0;
    var dacc = 0;
    var twoptrc = 0;
    var mathc = 0;
    var dfsc = 0;
    var treesc = 0;
    var stringsc = 0;
    var graphsc = 0;
    var othersc = 0;

    //WRONG dp,greedy,dac, twoptr, math , dfs , trees , strings , graphs , others
    var wdpc = 0;
    var wgreedyc = 0;
    var wdacc = 0;
    var wtwoptrc = 0;
    var wmathc = 0;
    var wdfsc = 0;
    var wtreesc = 0;
    var wstringsc = 0;
    var wgraphsc = 0;
    var wothersc = 0;

    var sizeofres = statusinfo.result.length;

    for (let i = 0; i < sizeofres; i++) {
      if (statusinfo.result[i].verdict) {
        // console.log(statusinfo.result[i].verdict);
        if (statusinfo.result[i].verdict === "OK") {
          //count the categories
          var categoryfound = 0;
          if (statusinfo.result[i].problem.tags.includes("dp")) {
            dpc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("greedy")) {
            greedyc += 1;
            categoryfound = 1;
          }
          if (
            statusinfo.result[i].problem.tags.includes("divide and conquer")
          ) {
            dacc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("two pointers")) {
            twoptrc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("trees")) {
            treesc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("graphs")) {
            graphsc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("strings")) {
            stringsc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("math")) {
            mathc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("dfs and similar")) {
            dfsc += 1;
            categoryfound = 1;
          }
          if (categoryfound === 0) {
            othersc += 1;
          }

          ac_count += 1;
        } else if (statusinfo.result[i].verdict === "WRONG_ANSWER") {
          //count the categories
          let categoryfound = 0;
          if (statusinfo.result[i].problem.tags.includes("dp")) {
            wdpc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("greedy")) {
            wgreedyc += 1;
            categoryfound = 1;
          }
          if (
            statusinfo.result[i].problem.tags.includes("divide and conquer")
          ) {
            wdacc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("two pointers")) {
            wtwoptrc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("trees")) {
            wtreesc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("graphs")) {
            wgraphsc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("strings")) {
            wstringsc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("math")) {
            wmathc += 1;
            categoryfound = 1;
          }
          if (statusinfo.result[i].problem.tags.includes("dfs and similar")) {
            wdfsc += 1;
            categoryfound = 1;
          }
          if (categoryfound === 0) {
            wothersc += 1;
          }

          wa_count += 1;
        } else if (statusinfo.result[i].verdict === "PARTIAL") {
          part_count += 1;
        } else if (statusinfo.result[i].verdict === "TIME_LIMIT_EXCEEDED") {
          tle_count += 1;
        } else if (statusinfo.result[i].verdict === "RUNTIME_ERROR") {
          rte_count += 1;
        } else if (statusinfo.result[i].verdict === "MEMORY_LIMIT_EXCEEDED") {
          mle_count += 1;
        } else {
          other_count += 1;
        }
      }
    }
    console.log(wa_count);

    setac((prev) => {
      return ac_count;
    });
    setpart((prev) => {
      return part_count;
    });
    setmle((prev) => {
      return mle_count;
    });
    setrte((prev) => {
      return rte_count;
    });
    setwa((prev) => {
      return wa_count;
    });
    settle((prev) => {
      return tle_count;
    });
    setother((prev) => {
      return other_count;
    });

    //for 2nd pie chart
    setdp((prev) => {
      return dpc;
    });
    setgreedy((prev) => {
      return greedyc;
    });
    setmath((prev) => {
      return mathc;
    });
    setdac((prev) => {
      return dacc;
    });
    setstrings((prev) => {
      return stringsc;
    });
    setgraphs((prev) => {
      return graphsc;
    });
    settrees((prev) => {
      return treesc;
    });
    settwoptr((prev) => {
      return twoptrc;
    });
    setdfs((prev) => {
      return dfsc;
    });
    setothers((prev) => {
      return othersc;
    });

    //for 3rd pie chart
    setwdp((prev) => {
      return wdpc;
    });
    setwgreedy((prev) => {
      return wgreedyc;
    });
    setwmath((prev) => {
      return wmathc;
    });
    setwdac((prev) => {
      return wdacc;
    });
    setwstrings((prev) => {
      return wstringsc;
    });
    setwgraphs((prev) => {
      return wgraphsc;
    });
    setwtrees((prev) => {
      return wtreesc;
    });
    setwtwoptr((prev) => {
      return wtwoptrc;
    });
    setwdfs((prev) => {
      return wdfsc;
    });
    setwothers((prev) => {
      return wothersc;
    });
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="align">
      <div>
        <h3 style={{ textAlign: "center" }}>📊 Enter CodeForces Username</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-child">
            <input name="name" onChange={handleChange} />
          </div>
          <div className="grid-child">
            <div className="center">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <div className="grid-container">
        <div className="grid-child">
          {submitting ? (
            <img
              src={userinfo.result[0].titlePhoto}
              alt="CF User ki FOTU"
              className="image--cover"
            />
          ) : null}
        </div>
        <div className="grid-child">
          <h4>
            User Name :{" "}
            {submitting
              ? userinfo.result[0].firstName + " " + userinfo.result[0].lastName
              : null}
          </h4>
          <h4>
            User's Rating : {submitting ? userinfo.result[0].rating : null}
          </h4>
          <h4>
            User's Current Rank : {submitting ? userinfo.result[0].rank : null}
          </h4>
          <h4>
            User's Best Rank : {submitting ? userinfo.result[0].maxRank : null}
          </h4>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* Loading CSS */}
      <div class="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <br /> */}

      <div class="parent">
        
        <div class="child">
          {/* CATEGORIES OF SUBMISSIONS 
         greedy , graphs, math, dfs and similar , dp , divide and conquer , 
        binary search , strings , trees , two pointers */}
          {submitting ? (
            <Chart
              width={"600px"}
              height={"450px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Category", "Count"],
                ["DP", dp],
                ["Greedy", greedy],
                ["Divide & Conquer", dac],
                ["Two Pointers", twoptr],
                ["Math", math],
                ["DFS & Similar", dfs],
                ["Trees", trees],
                ["Strings", strings],
                ["Graph", graphs],
                ["Others", others],
              ]}
              options={{
                // is3D: true,
                pieHole: 0.4,
                title: "Categories Of Solved Problems  ✔️✨",
                sliceVisibilityThreshold: 0.001,
              }}
              rootProps={{ "data-testid": "7" }}
            />
          ) : null}
        </div>
        <div class="child">
          {/*  CATEGORIES OF WRONG SUBMISSIONS 
           greedy , graphs, math, dfs and similar , dp , divide and conquer , 
          binary search , strings , trees , two pointers */}
          {submitting ? (
            <Chart
              width={"600px"}
              height={"450px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Category", "Count"],
                ["DP", wdp],
                ["Greedy", wgreedy],
                ["Divide & Conquer", wdac],
                ["Two Pointers", wtwoptr],
                ["Math", wmath],
                ["DFS & Similar", wdfs],
                ["Trees", wtrees],
                ["Strings", wstrings],
                ["Graph", wgraphs],
                ["Others", wothers],
              ]}
              options={{
                is3D: true,
                pieHole: 0.4,
                title: "Categories Of Wrong Submissions  ❌",
                sliceVisibilityThreshold: 0.001,
              }}
              rootProps={{ "data-testid": "7" }}
            />
          ) : null}
        </div>
      </div>

      {/* Loading CSS */}
      <div class="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <br /> */}
      <div>
        {/* 500 SUBMISSIONS  */}
        {submitting ? (
          <Chart
            width={"600px"}
            height={"450px"}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              [
                "Verdict",
                "Count",
                { role: "style" },
                {
                  sourceColumn: 0,
                  role: "annotation",
                  type: "string",
                  calc: "stringify",
                },
              ],
              ["AC", ac, "#109618", null],
              ["WA", wa, "#DC3912", null],
              ["Partial Correct", part, "#ff9900", null],
              ["TLE", tle, "#990099", null],
              ["RunTime Err", rte, "#66aa00", null],
              ["Mem Lim Exd", mle, "gold", null],
              ["Other", other, "#316395", null],
            ]}
            options={{
              title: "Verdicts on Last 500 Submissions",
              width: 600,
              height: 450,
              bar: { groupWidth: "95%" },
              legend: { position: "none" },
            }}
            // For tests
            rootProps={{ "data-testid": "6" }}
          />
        ) : null}
      </div>
    </div>
    </>
  );
}

export default Smart_practice;
