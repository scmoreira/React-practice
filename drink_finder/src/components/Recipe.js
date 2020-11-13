import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from '../context/ModalContext'

import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

function getModalStyle() {
    const top = 50 
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
    },
    header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
    },
    content: {
        padding: "12px 0",
        overflow: 'scroll'
    }
}))

const Recipe = ({ recipe }) => {

    // Material-ui modal settings
    const classes = useStyles()
    
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    // Use Context 
    const { info, setRecipeId, setInfo } = useContext(ModalContext)

    // Show ingredients
    const showIngredients = info => {
        let ingredients = []
        for(let i = 1; i < 16; i++){
            if( info[`strIngredient${i}`] ) {
                ingredients.push(
                    <li key={i}> { info[`strIngredient${i}`] }  { info[`strMeasure${i}`] }</li>
                )
            }
        }
        return ingredients
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>

                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`${recipe.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setRecipeId(recipe.idDrink)
                            handleOpen()
                        }}
                    >
                        See recipe
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setRecipeId(null)
                            setInfo({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{info.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p> {info.strInstructions}</p>

                            <img className="img-fluid my-4" src={info.strDrinkThumb} alt={`${info.strDrink}`} />

                            <h3>Ingredients and quantities</h3>
                            <ul>
                                { showIngredients(info) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

// Documentation
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe