import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';
import icons from '../../images/sprite.svg';

const calculateStrength = password => {
  const passwordLength = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (passwordLength >= 8 && hasUppercase && hasLowercase && hasSpecialChar) {
    return css.super_strong;
  } else if (passwordLength >= 8 && hasUppercase && hasLowercase) {
    return css.strong;
  } else if (passwordLength >= 6 && (hasUppercase || hasLowercase)) {
    return css.medium;
  } else if (passwordLength > 0) {
    return css.weak;
  } else {
    return css.empty;
  }
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { confirmPassword, ...payload } = values;
    dispatch(register(payload));
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Please enter your name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Password must be at least 6 characters')
      .max(12, 'Password should be no longer than 12 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  const strengthClass = calculateStrength(formik.values.password);

  return (
    <section>
      <div className={css.login_page_wrapper}>
        <div className={css.page_content}>
          <div>
            <div className={css.logo_login}>
              <svg className={css.logo_svg}>
                <use
                  xlinkHref={icons + '#icon-logo'}
                  className={css.logo_svg}
                />
              </svg>
              <h1 className={css.logo_title}>Money Guard</h1>
            </div>
            <form className={css.login_form} onSubmit={formik.handleSubmit}>
              <div className={css.input_wrapper}>
                <span className={css.input_icon}>
                  <svg className={css.svg_sizing}>
                    <use xlinkHref={icons + '#icon-email'} />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="username"
                  className={css.login_input}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className={css.error_message}>{formik.errors.email}</div>
              ) : null}
              <div className={css.input_wrapper}>
                <span className={css.input_icon}>
                  <svg className={css.svg_sizing}>
                    <use xlinkHref={icons + '#icon-password'} />
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={css.login_input}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className={css.error_message}>
                  {formik.errors.password}
                </div>
              ) : null}
              <div className={css.input_wrapper}>
                <span className={css.input_icon}>
                  <svg className={css.svg_sizing}>
                    <use xlinkHref={icons + '#icon-password'} />
                  </svg>
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  className={css.login_input}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <div className={css.password_srtength}>
                  <div className={css.indicator}>
                    <div className={strengthClass}></div>
                  </div>
                </div>
              </div>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className={css.error_message}>
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
              <div className={css.input_wrapper}>
                <span className={css.input_icon}>
                  <svg className={css.svg_sizing}>
                    <use xlinkHref={icons + '#icon-account'} />
                  </svg>
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="First name"
                  autoComplete="username"
                  className={css.login_input}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </div>
              {formik.touched.username && formik.errors.username ? (
                <div className={css.error_wrapper}>
                  <div className={css.error_message}>
                    {formik.errors.username}
                  </div>
                </div>
              ) : null}
              <Link to="/" className={css.login_colored_link}>
                <button type="submit" className={css.login_submit_button}>
                  Register
                </button>
              </Link>
            </form>
            <Link to="/login" className={css.login_white_link}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
