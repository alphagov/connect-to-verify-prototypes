var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/verify', (req, res) => {
  res.render('govuk-verify/index')
})

var steps = [
		[
			{
				'name': 'Check you need to prove users identity',
				'subtasks': [
					{
						'name': 'Answer questions to assess your identity needs',
						'href': '/risk-smart-questions/example'
					}
				]
			}
		],
		[
			{
			'name': 'Design and research your service with Verify',
			'subtasks': [
				{
					'name': 'Decide where verify fits into your service\'s user journey',
					'href': '/not-implemented'
				},
				{
					'name': 'Try out your service with a Verify demo',
					'href': '/not-implemented'
				}]
		}
		],[
			{
			'name': 'Create a technical connection plan',
			'subtasks': [
				{
					'name': 'Set up your service to send and receive messages from Verify',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/index.html'
				},
				{
					'name': 'Test that your service can send and receive messages from Verify',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/saml/samlComplianceTool.html'
				}
			]
			}],
			[{
			'name': 'Connect to a test environment',
			'subtasks': [
				{
					'name': 'Request certificates from Verify\'s Public Key Infrastructure (PKI)',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/pki/pkiRequestCert.html#pkirequestcert'
				},
				{
					'name': 'Request access to the Verify test environment',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/env/envRequestform.html#envrequestform'
				},
				{
					'name': 'Configure the Matching Service Adapter for the test environment',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/msa/msaUse.html#configuremsa'
				},
				{
					'name': 'Configure your service for the test environment',
					'href': ''
				}
			]
		}
	],
		[{
			'name': 'Connect Verify to your production service',
			'subtasks': [
				{
					'name': 'Request certificates from the Verify Public Key Infrastructure (PKI) for production',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/pki/pkiRequestCert.html#pkirequestcert'
				},
				{
					'name': 'Request access to the production environment',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/env/envRequestform.html#envrequestform'
				},
				{
					'name': 'Configure the Matching Service Adapter for the production environment',
					'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/pages/msa/msaUse.html#configuremsa'
				},
				{
					'name': 'Configure your service for the production environment',
					'href': ''
				}
			]
		}]
]

router.get('/how-to-connect', (req, res) => {
  res.render('task-list/index', {
    'steps': steps
  })
})

router.get('/risk-smart-questions/example-result', (req, res) => {
  res.render('risk-smart-questions/example-result', {
    'steps': steps
  })
})

router.get('/connect-to-verify-2/settings/service-certificates/obsolete', (req, res) => {
  res.render('connect-to-verify-2/settings/service-certificates', {revoked: true})
})
router.get('/connect-to-verify-2/settings/matching-service-certificates/obsolete', (req, res) => {
  res.render('connect-to-verify-2/settings/matching-service-certificates', {revoked: true})
})
router.get('/connect-to-verify-2/settings/service-certificates/upload', (req, res) => {
  res.render('connect-to-verify-2/settings/upload-certificate', {settingsPage: 'service-certificates'})
})
router.get('/connect-to-verify-2/settings/matching-service-certificates/upload', (req, res) => {
  res.render('connect-to-verify-2/settings/upload-certificate', {settingsPage: 'matching-service-certificates'})
})

router.get('/how-to-connect/not-implemented', (req, res) => {
  res.render('task-list/not-implemented')
})

module.exports = router
