import React from 'react'
import { Link } from 'react-router-dom'
import css from './LoginForm.module.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
export const LoginForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Incorrect email adress')
            .required('Please enter your email.'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(12, 'Password should be no longer than 12 characters')
            .required('Please, enter your password'),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
    });
    return (
        <section>
            <div className={css.login_page_wrapper}>
                <div className={css.page_content}>

                    <form className={css.login_form} onSubmit={formik.handleSubmit}>
                        <div className={css.input_wrapper}>
                            <span className={css.input_icon}>E</span>
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
                        <div className={css.input_wrapper}>
                            <span className={css.input_icon}>P</span>
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                className={css.login_input}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <Link to='/' className={css.login_colored_link}>Log in</Link>
                    </form>
                    <Link to='/register' className={css.login_white_link}>Register</Link>
                </div>
            </div>
        </section>
    )
}
