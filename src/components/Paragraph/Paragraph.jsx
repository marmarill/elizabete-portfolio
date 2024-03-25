export const Paragraph = ({children}) => {
    return (
        <div style={{display:'block', marginTop:'102px', marginTop: '102px', marginRight: 'auto', marginBottom:'102px'}}>
            <p style={{fontSize: '24px', textAlign: 'left', maxWidth:'746px'}}> 
                {children}
            </p>
        </div>
    )
}