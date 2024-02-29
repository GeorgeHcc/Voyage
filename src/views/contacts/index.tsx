import React, { Suspense } from "react";

function Contacts() {
  return (
    <>
      <Suspense fallback="loading">
        <div>Contacts</div>
      </Suspense>
    </>
  );
}

export default Contacts;
