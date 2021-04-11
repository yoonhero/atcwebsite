import PropTypes from "prop-types";

import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>어코딩투코딩 동아리</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
