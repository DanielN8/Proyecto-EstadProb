import React from 'react';

const Tab1 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Grafica</h2>

            <iframe
                title="deuda"
                width="1000"
                height="600"
                src="https://app.powerbi.com/reportEmbed?reportId=cde96833-be21-4fd9-84e1-84b581072ccf&autoAuth=true&ctid=f07b40ae-b60b-4e0f-bebe-afb42fc4dc69"
                frameBorder="0"
                allowFullScreen={true}
            ></iframe>
            
        </div>
    );
};
export default Tab1;