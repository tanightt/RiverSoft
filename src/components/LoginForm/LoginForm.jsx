import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import icons from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Incorrect email adress.')
      .required('Please enter your email.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters.')
      .max(12, 'Password should be no longer than 12 characters.')
      .required('Please, enter your password.'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(login({ email: values.email, password: values.password }));
    },
  });

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
                {formik.touched.email && formik.errors.email ? (
                  <div className={css.error_message}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={css.input_wrapper}>
                <span className={css.input_icon}>
                  <svg className={css.svg_sizing}>
                    <use xlinkHref={icons + '#icon-password'} />
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={css.login_input}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span
                  className={css.show_hide_password}
                  onClick={toggleShowPassword}
                >
                  <svg>
                    <use
                      xlinkHref={
                        showPassword
                          ? icons + '#icon-eye'
                          : icons + '#icon-eye-closed'
                      }
                    ></use>
                  </svg>
                </span>
                {formik.touched.password && formik.errors.password ? (
                  <div className={css.error_message}>
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <Link
                to="/"
                className={css.login_colored_link}
                onClick={formik.handleSubmit}
              >
                <button type="submit" className={css.login_submit_button}>
                  Log in
                </button>
              </Link>
            </form>
            <Link to="/register" className={css.login_white_link}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
