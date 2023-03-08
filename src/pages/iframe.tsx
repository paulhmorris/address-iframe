export default function IFrame() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <iframe
        title="See if home delivery is available at your address"
        src="https://address-poc.onrender.com/"
        style={{ border: "none" }}
        width="350"
        height="285"
        loading="lazy"
        sandbox="allow-scripts allow-forms"
      />
    </div>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
