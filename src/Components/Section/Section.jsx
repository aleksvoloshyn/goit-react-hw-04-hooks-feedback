// import s from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export { Section };
