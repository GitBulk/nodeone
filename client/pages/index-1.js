import Layout from '@components/layout'
import { getUsers } from '@lib/users'

export async function getStaticProps() {
  console.log('Index1: getStaticProps')
  const users = await getUsers()
  return { props: { users } }
}

export default function Index1({ users }) {
  return (
    <Layout>
      <div className='content'>
        <ul>
          {users.map(user => (
            <li key={user.id}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
