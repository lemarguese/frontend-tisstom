import { Helmet } from 'react-helmet-async';

import { ClinicView } from 'src/sections/clinic/view';

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Clinics </title>
      </Helmet>

      <ClinicView />
    </>
  );
}
