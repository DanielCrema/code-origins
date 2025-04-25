import React from "react"
import * as S from './style'

type Props = {
    page: number
    setPage: (page: number) => void
}

const Pagination: React.FC<Props> = ({ page, setPage }) => {

    return (
        <S.Pagination>
            <S.ButtonPagination
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
            >
                Anterior
            </S.ButtonPagination>
            <S.CurrentPage>{page + 1}</S.CurrentPage>
            <S.ButtonPagination onClick={() => setPage(page + 1)}>
                Próximo
            </S.ButtonPagination>
        </S.Pagination>
    )
}

export default Pagination