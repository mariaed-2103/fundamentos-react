export default props => {
    const elseChild =props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}

/*se expressão for verdadeira, retorna os filhos do componente If
se for falsa, não retorna nada*/

export const Else = props => props.children