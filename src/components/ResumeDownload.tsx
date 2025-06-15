export default function ResumeDownload() {
  return (
    <div id="resume" className="flex flex-col items-center">
      <h3 className="section-title">Resume</h3>
      <a
        href="/assets/nawwal_resume.pdf"
        download
        className="btn"
      >
        Download PDF
      </a>
    </div>
  );
}
