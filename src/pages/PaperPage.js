import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PaperPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About the Traveling Salesman Problem</h1>
      {/* PDF Viewer */}
      <div style={styles.pdfContainer}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl="/paper.pdf" />
        </Worker>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)",
    color: "white",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px",
    textAlign: "center",
  },
  pdfContainer: {
    width: "80%",
    height: "500px",
    border: "1px solid #ccc",
  },
};

export default PaperPage;
