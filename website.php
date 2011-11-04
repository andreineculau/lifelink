<?

require_once('libs/funcs.php');

$smarty->prepare_display();
if (!$_REQUEST['ajax'])
{
	$smarty->display('header.tpl');
}

switch ($_REQUEST['sub'])
{
	/* copyright; disclaimer */
	/* ----- ----- ----- ----- */
	case 'copyright':
	case 'disclaimer':
		$smarty->display($smarty->get_page() . '.tpl');
		break;

	/* default */
	/* ----- ----- ----- ----- */
	default:
		$smarty->display($smarty->get_page_default() . 'default.tpl');
}

if (!$_REQUEST['ajax'])
{
	$smarty->display('footer.tpl');
}

?>