import { useState } from "react";
import { useCopyToClipboard } from "./wedding-util";

function Account() {
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const toggleGroomAccount = () => setIsGroomOpen(!isGroomOpen);

  const [isBrideOpen, setIsBrideOpen] = useState(false);
  const toggleBrideAccount = () => setIsBrideOpen(!isBrideOpen);

  const [isCopied, copy] = useCopyToClipboard();
  const [isCopiedBride1, copyBride1] = useCopyToClipboard();
  const [isCopiedBride2, copyBride2] = useCopyToClipboard();
  const [isCopiedBride3, copyBride3] = useCopyToClipboard();

  return (
    <div className="account-container">
      <div className="account-groom">
        <div
          className={`account-header ${isGroomOpen ? "open" : ""}`}
          onClick={toggleGroomAccount}
        >
          <span className="account-subject">신랑</span>
          <span className="account-icon">▼</span>
        </div>

        <div className={`account-content ${isGroomOpen ? "open" : ""}`}>
          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>박호정</p>
              <p>국민 123-456-78910</p>
            </div>
            <button
              className="account-copy"
              onClick={() => copy("123-456-78910")}
            >
              {isCopied ? "OK!" : "복사"}
            </button>
          </div>
        </div>
      </div>

      <div className="account-bride">
        <div
          className={`account-header ${isBrideOpen ? "open" : ""}`}
          onClick={toggleBrideAccount}
        >
          <span className="account-subject">신부</span>
          <span className="account-icon">▼</span>
        </div>

        <div className={`account-content ${isBrideOpen ? "open" : ""}`}>
          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>[혼주] 최동춘</p>
              <p>국민 123-456-78910</p>
            </div>
            <button
              className="account-copy"
              onClick={() => copyBride1("123-456-78910")}
            >
              {isCopiedBride1 ? "OK!" : "복사"}
            </button>
          </div>

          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>[혼주] 노미해</p>
              <p>국민 123-456-78910</p>
            </div>
            <button
              className="account-copy"
              onClick={() => copyBride2("123-456-78910")}
            >
              {isCopiedBride2 ? "OK!" : "복사"}
            </button>
          </div>

          <div className="account-content-wrapper">
            <div className="account-holder">
              <p>최주희</p>
              <p>국민 123-456-78910</p>
            </div>
            <button
              className="account-copy"
              onClick={() => copyBride3("123-456-78910")}
            >
              {isCopiedBride3 ? "OK!" : "복사"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
