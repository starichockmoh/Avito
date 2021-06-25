import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import s from "./Paginator.module.css"


type PageChangeFunctionType = () => void
type PropsType = {
    onPageChanged: (p:number) => void
    totalItems: number
    pageSize: number
}
export const Paginator: React.FC<PropsType>= ({onPageChanged, totalItems, pageSize}) => {
    let pagesCount: number = Math.ceil(totalItems / pageSize)
    let [pageLeft,changePageLeft] = useState(1)
    let [pageRight, changePageRight] = useState(10)

    let changeSizeToRight: PageChangeFunctionType = () => {
        changePageRight(pageRight+10)
        changePageLeft(pageLeft+10)
        onPageChanged(pageLeft+10)
    }

    let changeSizeToLeft: PageChangeFunctionType = () => {
        changePageRight(pageRight-10)
        changePageLeft(pageLeft-10)
        onPageChanged(pageLeft-10)
    }

    let MaxLeft: PageChangeFunctionType = () => {
        changePageRight(10)
        changePageLeft(1)
        onPageChanged(1)

    }

    let MaxRight: PageChangeFunctionType = () => {
        changePageLeft(pagesCount-10)
        changePageRight(pagesCount)
        onPageChanged(pagesCount-10)
    }

    let pages: Array<number> = []
    for (let i = pageLeft; i <= pageRight; i++) {
        pages.push(i)
        if (i >= pagesCount) {
            break
        }
    }
    return <div>
        {(pageLeft === 1)? null
            : <span><Button onClick={pageLeft > 1? MaxLeft: undefined}>back</Button>
                <Button onClick={pageLeft > 1? changeSizeToLeft: undefined}>←</Button></span> }
        {pages.map(p => {
            return <Button onClick={() => {onPageChanged(p)}}>{p}</Button>
        })}
        <Button onClick={pageRight < pagesCount? changeSizeToRight: undefined}>→</Button>
        <Button onClick={pageRight < pagesCount? MaxRight: undefined}>next</Button>
    </div>
}

