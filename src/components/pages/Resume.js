import React from 'react';

export default function Resume() {
  // function to download pdf on button click
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
}

  return (
    <main>
      <section className="resume">
        <div>
        <h2>Resume</h2>
        <p>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
          dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
          sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
          sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
          vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
          libero. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
          lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
          in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
          bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
          est ligula suscipit velit, sed bibendum turpis dui in sapien.
        </p>
        </div>
        <div className="btnDiv">
        <button onClick={onButtonClick}>Download</button>
        </div>
      </section>
    </main>
  );
}
