import {Button} from "@mui/material";
import { AiFillGithub } from "react-icons/ai";

const ProjectButton = ({onClick}) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                backgroundColor: 'transparent',
                border: '2px solid',
                borderRadius: '25px',
                padding: '10px 20px',
                borderColor: '#36385C',
                color: '#575075',
                gap: '5px',
                fontFamily: 'Jura',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#C6C6C6',
                    fontWeight: 'bold',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 10px 0 #36385C'
                },
            }}
        >
            View project <AiFillGithub />
        </Button>
    );
};

export default ProjectButton;