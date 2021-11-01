import React, { ReactElement } from "react";
import style from './breadcrumb.module.scss'


interface PropsBreadcrumb {
    breadcrumbs: (string | ReactElement)[]
}

const Breadcrumb = (Props: PropsBreadcrumb) => {
    return (
        <nav className={style.logo + "breadcrumbs text-sm padding-left-xl"} aria-label="Breadcrumbs">
            <ol className="flex flex-wrap gap-xxs">
                {
                    Props.breadcrumbs.map((breadcrumb, index: number) => {
                        return (
                            <li key={index} className="breadcrumbs__item">
                                <button className={`border-bg-light border-opacity-0 radius-md`}>
                                    {breadcrumb}
                                </button>
                                {index < Props.breadcrumbs.length - 1 && 
                                <span className="aria-current=page color-contrast-lower margin-left-xxs" aria-hidden="true">/</span>}
                            </li>
                        )
                    })
                }
             
            </ol>
        </nav>
    )
}
export default Breadcrumb