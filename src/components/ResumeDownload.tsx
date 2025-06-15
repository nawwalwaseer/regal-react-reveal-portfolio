
export default function ResumeDownload() {
  return (
    <div id="resume" className="section animate-fade-in flex flex-col items-center">
      <h3 className="section-title">Resume</h3>
      <a
        href="/assets/nawwal_resume.pdf"
        download
        className="btn mt-4"
      >
        Download PDF
      </a>
    </div>
  );
}
