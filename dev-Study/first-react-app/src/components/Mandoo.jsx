// Mandoo.jsx
import MandooImg from "../assets/mandoo.png";

export default function Mandoo({ borderColor, imgWidth }) {
  return (
    <div
      style={{
        border: `5px solid ${borderColor}`,
        marginBottom: "20px",
      }}
    >
      <span>img size : {imgWidth}px</span>
      <img
        style={{ display: "block", width: `${imgWidth}px` }}
        src={MandooImg}
        alt="Mandoo"
      />
    </div>
  );
}
