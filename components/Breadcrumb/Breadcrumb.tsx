import React, { ReactElement } from "react";
import style from './breadcrumb.module.scss'
import classnames from 'classnames'


interface PropsBreadcrumb {
    breadcrumbs: (string | ReactElement)[]
}

const Breadcrumb = (Props: PropsBreadcrumb) => {
    // Styles classNames with classnames
    const nav = classnames(
        style.breadcrumb, 
        'text-sm padding-left-xl'
    )
    const ol = classnames(
        'flex', 
        'flex-wrap', 
        'gap-xxs'
    )
    const span = classnames(
        'color-contrast-lower', 
        'margin-left-xxs'
    )

    return (
        <nav className={nav} aria-label="Breadcrumbs">
            <ol className={ol}>
                {
                    Props.breadcrumbs.map((breadcrumb, index) => {
                        return (
                            <li key={breadcrumb.toString()}>
                                {breadcrumb}
                                {index < Props.breadcrumbs.length - 1 && 
                                    <span className={span} aria-hidden="true" aria-current="page">/</span>
                                }
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    )
}
export default Breadcrumb