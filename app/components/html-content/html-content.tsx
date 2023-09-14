interface IHTMLcontentProps {
    html: string
}

const  HTMLContent = ({ html }:IHTMLcontentProps) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

export default HTMLContent