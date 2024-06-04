import React from 'react';
import './HelpPage.css';

function HelpPage() {
  return (
    <div className="help-page">
      <h2 className="help-heading">How to Obtain a Verified Certificate for Your Water Source</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1: Contact Local Authorities</h3>
          <p>Reach out to your local health department or water authority to learn about certification requirements.</p>
        </div>
        <div className="step">
          <h3>Step 2: Schedule Water Testing</h3>
          <p>Arrange for a certified laboratory to test your water for contaminants. Find a lab via the 
            <a href="https://www.epa.gov/dwlabcert/contact-information-certification-programs-and-certified-laboratories-drinking-water" target="_blank" rel="noopener noreferrer">EPA Lab Certification page</a> 
            or through local recommendations.
          </p>
        </div>
        <div className="step">
          <h3>Step 3: Submit Results</h3>
          <p>Submit the lab results to the relevant regulatory body (local health department or state water board).</p>
        </div>
        <div className="step">
          <h3>Step 4: Inspection (If Required)</h3>
          <p>Some areas require an inspection of your water source. Contact a certified inspector if needed.</p>
        </div>
        <div className="step">
          <h3>Step 5: Obtain Certification</h3>
          <p>Once approved, you’ll receive a certification document verifying your water is safe for sale.</p>
        </div>
      </div>
      <div className="resources">
        <h3>Resources</h3>
        <ul>
          <li><strong>Local Health Department:</strong> Check your city/county website.</li>
          <li><strong>EPA:</strong> Visit <a href="https://www.epa.gov/" target="_blank" rel="noopener noreferrer">EPA</a>.</li>
          <li><strong>State Water Board:</strong> Look up your state’s water resources department.</li>
        </ul>
      </div>
      <p className='lastpara'>Keep all documents updated and stay informed on local regulations to ensure compliance.</p>
    </div>
  );
}

export default HelpPage;
