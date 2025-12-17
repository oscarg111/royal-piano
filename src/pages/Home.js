export default function Home() {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="display-4">Royal Piano Service, Inc.</h1>
        <p className="lead fst-italic">"Keeping Atlanta in Tune"</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>Our Services</h3>
          <ul className="list-group">
            <li className="list-group-item">Professional Piano Tuning</li>
            <li className="list-group-item">Reconditioning & Rebuilding</li>
            <li className="list-group-item">Appraisals & Consulting</li>
            <li className="list-group-item">Over 25 Years Experience</li>
            <li className="list-group-item">Grand Piano Specialists</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h3>Service Area</h3>
          <p>We proudly serve the Atlanta Metro area including:</p>
          <ul>
            <li>Cobb</li>
            <li>Fulton</li>
            <li>Gwinnett</li>
            <li>Dekalb</li>
            <li>Paulding</li>
            <li>Cherokee</li>
            <li>Forsyth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
