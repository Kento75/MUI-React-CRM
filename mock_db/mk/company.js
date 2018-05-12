module.exports = () => {
  const data = { company: [] }
  // Create 1000 companies
  for (let i = 0; i < 1000; i++) {
    data.company.push(
      { company_code: `code-${i}`,
        company_name: `name-${i}`,
        address:      `address-${i}`,
        mail:         `mail-${i}`,
      }
    )
  }
  return data
}
