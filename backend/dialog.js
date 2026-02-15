const DIALOG_ID_PREFIX = 'mlcndlg-';
const with_dialog_targets = document.querySelectorAll('button[target-dialog-id]:not([target-dialog-id=""])');
const existing_dialogs = document.querySelectorAll('div[id^="' + DIALOG_ID_PREFIX + '"]');

async function sleep(ms) {
	return new Promise(function(e) {
		setTimeout(e, ms);
	});
}

function close_dialog(target) {
	const target_dialog = document.getElementById(DIALOG_ID_PREFIX + '' + target);
	if (target_dialog && !target_dialog.classList.contains('closed'))
		target_dialog.classList.toggle('closed');
}

function open_dialog(target) {
	const target_dialog = document.getElementById(DIALOG_ID_PREFIX + '' + target);
	if (target_dialog && target_dialog.classList.contains('closed'))
		target_dialog.classList.toggle('closed');
}

if (with_dialog_targets) {
	// assign close buttons
	for (let i = 0; i < with_dialog_targets.length; i++) {
		/* async event listener kung sakaling mangailangan in the future */
		with_dialog_targets[i].addEventListener('click', async function(e) {
			/* parehong required ang target-dialog-id target-dialog-command sa button */
			const target = e.target.getAttribute('target-dialog-id');
			const command = e.target.getAttribute('target-dialog-command');
			if (/\s/.test(target))
				return; /* bawal space */
			if (!command)
				return;
			switch (command.toLowerCase()) {
				/*
				case 'example-reset-dialog-fields-then-open':
					reset_fields(target);
					// wag maglagay ng break; para dumiretso sa case 'open'
					// at magbukas ang dialog
				*/
				case 'open':
					open_dialog(target);
					break;
				/*
				case 'example-submit-dialog-then-close':
					submit_form(target);
					// wag lagyan ng break; para dumiretso sa case 'close'
				*/
				default: /* kung non-existing command, defaults as a close dialog */
				case 'close':
					close_dialog(target);
			}
		});
	}
}
