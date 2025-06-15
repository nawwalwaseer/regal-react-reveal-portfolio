
export default function ResumeDownload() {
  return (
    <div id="resume" className="py-16 flex flex-col items-center">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-7 text-center font-heading">Resume</h3>
      <a
        href="/assets/nawwal_resume.pdf"
        download
        className="bg-gold text-neutral-900 font-semibold px-7 py-3 rounded-lg shadow hover:bg-gold/90 transition-all border border-gold"
      >
        Download PDF
      </a>
    </div>
  );
}
