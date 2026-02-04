interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#e88906', marginBottom: '20px' }}>
      Neue Kontaktanfrage!
    </h2>
    
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Kontaktdaten:</h3>
      <p style={{ margin: '5px 0' }}><strong>Name:</strong> {name}</p>
      <p style={{ margin: '5px 0' }}><strong>E-Mail:</strong> {email}</p>
    </div>
    
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Nachricht:</h3>
      <p style={{ lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    
    <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e88906', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
      <p style={{ margin: '0', fontSize: '14px' }}>
        Diese E-Mail wurde über das Kontaktformular auf dailydoseofcontent.de gesendet.
      </p>
    </div>
  </div>
);
