import Airtable from 'airtable'

const API_KEY = 'keyd81K8sCOJj9TSD'
const BASE_ID = 'app1hNq3ad42oYs4G'

const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID)

const PARTICIPATION_TYPE = [
  'Оффлайн',
  'Онлайн',
]


const registration = async (req, res) => {
  try {
    const body = JSON.parse(req.body)
    let tableName

    if (body.participationType === PARTICIPATION_TYPE[0]) {
      tableName = 'Заявки оффлайн'
    } else {
      tableName = 'Заявки онлайн'
    }

    console.log(11, tableName)

    await base('Заявки').create({
      "E-mail": body.email,
      "Имя": body.name,
      "Организация": body.organizationType,
      "Формат участия": body.participationType,
      "Телефон": body.phone,
      "Источник": "Регистрация сайт",
      "Дата конференции": "2021-03-24"
    });

    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ error: e instanceof Error ? e.message : String(e) })
  }
}

export default registration
