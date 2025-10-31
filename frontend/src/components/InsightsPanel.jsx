import { useEffect, useState } from 'react'

function InsightsPanel() {
  const [insight, setInsight] = useState('Loading insights...')

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch('https://tasktracker-tlcz.onrender.com/insights')
        const data = await response.json()
        setInsight(data.summary)
      } catch (err) {
        console.error('Error fetching insights:', err)
      }
    }

    fetchInsights()
  }, [])
  const styles = {
    container: {
      backgroundColor: "#f0f7ff",
      borderRadius: "12px",
      padding: "20px",
      margin: "20px auto",
      width: "90%",
      maxWidth: "500px",
      boxShadow: "gray",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      color: "#0056b3",
      marginBottom: "10px",
      fontSize: "22px",
    },
    text: {
      color: "#333",
      fontSize: "16px",
     
    },
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Smart Insights</h2>
      <p style={styles.text}>{insight}</p>
    </div>
  )
}

export default InsightsPanel
