/**
 * NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
 *
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */
import { NextPageContext } from 'next/dist/shared/lib/utils'
import NextErrorComponent, { ErrorProps } from 'next/error'

const CustomErrorComponent = (props: ErrorProps) => {
   // If you're using a Nextjs version prior to 12.2.1, uncomment this to
   // compensate for https://github.com/vercel/next.js/issues/8592

   return <NextErrorComponent {...props} />
}

CustomErrorComponent.getInitialProps = async (contextData: NextPageContext) => {
   // This will contain the status code of the response
   return NextErrorComponent.getInitialProps(contextData)
}

export default CustomErrorComponent
