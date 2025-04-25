import styled from "styled-components"

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`

export const ButtonPagination = styled.button`
  background-color: ${({ theme }) => theme.color.green};
  border: 1px solid ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.black};
  padding: 10px;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.color.green};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.black};
    cursor: not-allowed;
    opacity: 0.8;
    border: 1px solid ${({ theme }) => theme.color.gray};
  }
`

export const CurrentPage = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.color.green};
`