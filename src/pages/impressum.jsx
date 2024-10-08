import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - Christian Gleitze</title>
        <meta
          name="description"
          content="Impressum"
        />
      </Head>
      <SimpleLayout
      >
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Impressum
        </h1>
        <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
          <p className="pb-6">
            Angaben gemäß § 5 TMG<br />
            Christian Gleitze<br />
            Franfurt am Main
          </p>
          <p className="pb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Kontakt
          </p>
          <p className="pb-6">
            Schreiben Sie mir eine Mail an {' '}
            <a
              href="mailto:connectingdotscoding@gmail.com"
              class="text-teal-400 underline hover:no-underline"
            >
              connectingdotscoding@gmail.com
            </a>
            .
          </p>
          <p className="pb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            EU-Streitschlichtung
          </p>
          <p className="pb-6">
            Die Europäische Kommission stellt eine Plattform zur Online Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr"
              class="text-teal-400 underline hover:no-underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>.
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Verbraucherstreitbeilegung/Universalschlichtungsstelle. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <p className="pb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Haftung für Inhalte
          </p>
          <p className="pb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <p className="pb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Haftung für Links
          </p>
          <p className="pb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          <p className="pb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Urheberrecht
          </p>
          <p className="pb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p className="pb-6">
            Quelle: eRecht24
          </p>
        </div>
      </SimpleLayout>
    </>
  )
}
