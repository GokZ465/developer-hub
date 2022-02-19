import { useState } from "react";

const SearchPage = () => {
  const main = document.createElement("div");
  const abortCont = new AbortController();
  const [title, setTitle] = useState("");
  const output = document.querySelector(".output");
  const base =
    "https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow&accepted=true";

  const pathURL = `&tagged=${title}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    const url = base + pathURL;
    fetch(url, { signal: abortCont.signal })
      .then((res) => res.json())
      .then((data) => outputData(data.items));
  };

  const handleClear = () => {
    abortCont.abort();
    document.querySelector(".output").innerHTML = "";
    //document.querySelector("output").removeChild();
  };
  //----------------------------------Output_DATA------------------------------//

  function outputData(data) {
    data.forEach((el) => {
      console.log(el);

      output.append(main);
      const div1 = document.createElement("div");
      div1.textContent = el.title;
      main.append(div1);
      const div2 = document.createElement("div");
      main.append(div2);
      el.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        div2.append(span);
      });
      const div3 = document.createElement("div");
      main.append(div3);
      div3.innerHTML = `<a href="${el.link}" target="_blank">${el.link}<a>"`;
    });
  }

  //----------------------------------Output_DATA------------------------------//

  return (
    <div className="search">
      <div class="b-chat">
        <div class="b-chat__container">
          <div id="chat"></div>
        </div>
      </div>

      <form className="a-form" onSubmit={handleSubmit}>
        <label>Enter your tag</label>

        <input
          type="text"
          required
          name="input"
          placeholder="Type your search tag here..."
          autoComplete="off"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <textarea required></textarea> */}
        <div className="searchBtn-container">
          <button className="searchBtn-1 searchBtn">CLICK ME</button>
          <button className="searchBtn-2 searchBtn" onClick={handleClear}>
            CLEAR
          </button>
        </div>
      </form>

      <div className="output"> </div>
    </div>
  );
};
export default SearchPage;

//{
/* <form className="c-chat__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="Type your message here..."
            autoFocus
            autoComplete="off"
            required
          />
        </form> */
//}
