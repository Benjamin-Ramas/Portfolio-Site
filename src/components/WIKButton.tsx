interface ButtonProps {
    icon_src: string;
    name: string;
}

export default function WIKButton(props: ButtonProps){
    return(
        
            <div className="WIKButton">
                <img src={props.icon_src} />
                <p>{props.name}</p>
            </div>
    )
}