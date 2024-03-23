'use client'

import { AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxArrowDownIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowDownRightIcon, ArrowDownTrayIcon, ArrowLeftCircleIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftIcon, ArrowLeftStartOnRectangleIcon, ArrowLongDownIcon, ArrowLongLeftIcon, ArrowLongRightIcon, ArrowLongUpIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon, ArrowRightCircleIcon, ArrowRightEndOnRectangleIcon, ArrowRightIcon, ArrowRightStartOnRectangleIcon, ArrowTopRightOnSquareIcon, ArrowTrendingDownIcon, ArrowTrendingUpIcon, ArrowUpCircleIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpOnSquareIcon, ArrowUpOnSquareStackIcon, ArrowUpRightIcon, ArrowUpTrayIcon, ArrowUturnDownIcon, ArrowUturnLeftIcon, ArrowUturnRightIcon, ArrowUturnUpIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ArrowsRightLeftIcon, ArrowsUpDownIcon, AtSymbolIcon, BackspaceIcon, BackwardIcon, BanknotesIcon, Bars2Icon, Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, Bars4Icon, BarsArrowDownIcon, BarsArrowUpIcon, Battery0Icon, Battery100Icon, Battery50Icon, BeakerIcon, BellAlertIcon, BellIcon, BellSlashIcon, BellSnoozeIcon, BoltIcon, BoltSlashIcon, BookOpenIcon, BookmarkIcon, BookmarkSlashIcon, BookmarkSquareIcon, BriefcaseIcon, BugAntIcon, BuildingLibraryIcon, BuildingOffice2Icon, BuildingOfficeIcon, BuildingStorefrontIcon, CakeIcon, CalculatorIcon, CalendarDaysIcon, CalendarIcon, CameraIcon, ChartBarIcon, ChartBarSquareIcon, ChartPieIcon, ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon, CheckBadgeIcon, CheckCircleIcon, CheckIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon, ChevronUpIcon, CircleStackIcon, ClipboardDocumentCheckIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, ClipboardIcon, ClockIcon, CloudArrowDownIcon, CloudArrowUpIcon, CloudIcon, CodeBracketIcon, CodeBracketSquareIcon, Cog6ToothIcon, Cog8ToothIcon, CogIcon, CommandLineIcon, ComputerDesktopIcon, CpuChipIcon, CreditCardIcon, CubeIcon, CubeTransparentIcon, CurrencyBangladeshiIcon, CurrencyDollarIcon, CurrencyEuroIcon, CurrencyPoundIcon, CurrencyRupeeIcon, CurrencyYenIcon, CursorArrowRaysIcon, CursorArrowRippleIcon, DevicePhoneMobileIcon, DeviceTabletIcon, DocumentArrowDownIcon, DocumentArrowUpIcon, DocumentChartBarIcon, DocumentCheckIcon, DocumentDuplicateIcon, DocumentIcon, DocumentMagnifyingGlassIcon, DocumentMinusIcon, DocumentPlusIcon, DocumentTextIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EllipsisVerticalIcon, EnvelopeIcon, EnvelopeOpenIcon, ExclamationCircleIcon, ExclamationTriangleIcon, EyeDropperIcon, EyeIcon, EyeSlashIcon, FaceFrownIcon, FaceSmileIcon, FilmIcon, FingerPrintIcon, FireIcon, FlagIcon, FolderArrowDownIcon, FolderIcon, FolderMinusIcon, FolderOpenIcon, FolderPlusIcon, ForwardIcon, FunnelIcon, GifIcon, GiftIcon, GiftTopIcon, GlobeAltIcon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, HandRaisedIcon, HandThumbDownIcon, HandThumbUpIcon, HashtagIcon, HeartIcon, HomeIcon, HomeModernIcon, IdentificationIcon, InboxArrowDownIcon, InboxIcon, InboxStackIcon, InformationCircleIcon, KeyIcon, LanguageIcon, LifebuoyIcon, LightBulbIcon, LinkIcon, ListBulletIcon, LockClosedIcon, LockOpenIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon, MapIcon, MapPinIcon, MegaphoneIcon, MicrophoneIcon, MinusCircleIcon, MinusIcon, MoonIcon, MusicalNoteIcon, NewspaperIcon, NoSymbolIcon, PaintBrushIcon, PaperAirplaneIcon, PaperClipIcon, PauseCircleIcon, PauseIcon, PencilIcon, PencilSquareIcon, PhoneArrowDownLeftIcon, PhoneArrowUpRightIcon, PhoneIcon, PhoneXMarkIcon, PhotoIcon, PlayCircleIcon, PlayIcon, PlayPauseIcon, PlusCircleIcon, PlusIcon, PowerIcon, PresentationChartBarIcon, PresentationChartLineIcon, PrinterIcon, PuzzlePieceIcon, QrCodeIcon, QuestionMarkCircleIcon, QueueListIcon, RadioIcon, ReceiptPercentIcon, ReceiptRefundIcon, RectangleGroupIcon, RectangleStackIcon, RocketLaunchIcon, RssIcon, ScaleIcon, ScissorsIcon, ServerIcon, ServerStackIcon, ShareIcon, ShieldCheckIcon, ShieldExclamationIcon, ShoppingBagIcon, ShoppingCartIcon, SignalIcon, SignalSlashIcon, SparklesIcon, SpeakerWaveIcon, SpeakerXMarkIcon, Square2StackIcon, Square3Stack3DIcon, Squares2X2Icon, SquaresPlusIcon, StarIcon, StopCircleIcon, StopIcon, SunIcon, SwatchIcon, TableCellsIcon, TagIcon, TicketIcon, TrashIcon, TrophyIcon, TruckIcon, TvIcon, UserCircleIcon, UserGroupIcon, UserIcon, UserMinusIcon, UserPlusIcon, UsersIcon, VariableIcon, VideoCameraIcon, VideoCameraSlashIcon, ViewColumnsIcon, ViewfinderCircleIcon, WalletIcon, WifiIcon, WindowIcon, WrenchIcon, WrenchScrewdriverIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HexColorPicker } from 'react-colorful';
import { useRef, useState } from 'react';
import html2canvas from "html2canvas";

export default function Home() {
	const [bgColour, setBgColor] = useState('#456789');
	const [iconBgColour, setIconBgColour] = useState('#ffffff');
	const [iconColour, setIconColour] = useState('#000000');

	const wallpaperRef = useRef<HTMLElement>(null);

	const downloadWallpaper = async () => {
		console.log('starting to download...');

		const wallpaperElement = wallpaperRef.current;
		if (!wallpaperElement) return;

		try {
			const result = await html2canvas(wallpaperElement, { removeContainer: false, backgroundColor: null });

			const asURL = result.toDataURL('image/png');
			const anchor = document.createElement('a');
			anchor.href = asURL;
			anchor.download = 'hericon-wallpaper.png';
			anchor.click();
			anchor.remove();
		} catch (err) {
			console.error('Error: ', err);
		}
	};

	return (
		<div className="flex h-screen">
			<div className="hidden md:flex flex-col w-64 bg-gray-100">
				<div className="flex items-center justify-center h-16 bg-gray-100">
					<span className=" font-bold uppercase">Settings</span>
				</div>

				<div className="flex flex-col overflow-y-auto">
					<div className="flex-1 px-2 bg-gray-100">
						<div className="flex flex-col items-center mb-6">
							<h2 className="flex flex-row flex-nowrap items-center">
								<span className="flex-none block mx-2 px-2 py-2 text-sm rounded-xl leading-none  bg-slate-700 text-white">Background</span>
							</h2>
							<HexColorPicker className="p-2" color={bgColour} onChange={setBgColor} />
							<p>{bgColour}</p>
						</div>
						<div className="flex flex-col items-center mb-6">
							<h2 className="flex flex-row flex-nowrap items-center">
								<span className="flex-none block mx-2 px-2 py-2 text-sm rounded-xl leading-none  bg-slate-700 text-white">Icon Background</span>
							</h2>
							<HexColorPicker className="p-2" color={iconBgColour} onChange={setIconBgColour} />
							<p>{iconBgColour}</p>
						</div>
						<div className="flex flex-col items-center mb-6">
							<h2 className="flex flex-row flex-nowrap items-center">
								<span className="flex-none block mx-2 px-2 py-2 text-sm rounded-xl leading-none  bg-slate-700 text-white">Icon Colour</span>
							</h2>
							<HexColorPicker className="p-2" color={iconColour} onChange={setIconColour} />
							<p>{iconColour}</p>
						</div>
						<div className="flex flex-col items-center">
							<button className="bg-emerald-500 rounded-full p-2 text-white hover:-translate-y-1 active:translate-y-0 transition-all ease-in-out duration-100" onClick={downloadWallpaper}>
								<div className="flex justify-center gap-1 items-center">
									<ArrowDownTrayIcon width={20} height={20} />
									<span>Download</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>

			<article ref={wallpaperRef} className="flex flex-col flex-1 overflow-y-auto">
				<div style={{ backgroundColor: `${bgColour}` }} className="w-full h-screen pt-20">
					<div style={{ color: `${iconColour}`, backgroundColor: `${iconBgColour}` }} className={`flex flex-wrap mx-auto max-w-6xl p-6 gap-2  rounded-3xl shadow]`}>
						<AcademicCapIcon width={40} height={40} className="hover:scale-110" title="AcademicCapIcon" />
						<AdjustmentsHorizontalIcon width={40} height={40} className="hover:scale-110" title="AdjustmentsHorizontalIcon" />
						<AdjustmentsVerticalIcon width={40} height={40} className="hover:scale-110" title="AdjustmentsVerticalIcon" />
						<ArchiveBoxArrowDownIcon width={40} height={40} className="hover:scale-110" title="ArchiveBoxArrowDownIcon" />
						<ArchiveBoxXMarkIcon width={40} height={40} className="hover:scale-110" title="ArchiveBoxXMarkIcon" />
						<ArchiveBoxIcon width={40} height={40} className="hover:scale-110" title="ArchiveBoxIcon" />
						<ArrowDownCircleIcon width={40} height={40} className="hover:scale-110" title="ArrowDownCircleIcon" />
						<ArrowDownLeftIcon width={40} height={40} className="hover:scale-110" title="ArrowDownLeftIcon" />
						<ArrowDownOnSquareStackIcon width={40} height={40} className="hover:scale-110" title="ArrowDownOnSquareStackIcon" />
						<ArrowDownOnSquareIcon width={40} height={40} className="hover:scale-110" title="ArrowDownOnSquareIcon" />
						<ArrowDownRightIcon width={40} height={40} className="hover:scale-110" title="ArrowDownRightIcon" />
						<ArrowDownTrayIcon width={40} height={40} className="hover:scale-110" title="ArrowDownTrayIcon" />
						<ArrowDownIcon width={40} height={40} className="hover:scale-110" title="ArrowDownIcon" />
						<ArrowLeftCircleIcon width={40} height={40} className="hover:scale-110" title="ArrowLeftCircleIcon" />
						<ArrowLeftEndOnRectangleIcon width={40} height={40} className="hover:scale-110" title="ArrowLeftEndOnRectangleIcon" />
						<ArrowLeftStartOnRectangleIcon width={40} height={40} className="hover:scale-110" title="ArrowLeftStartOnRectangleIcon" />
						<ArrowLeftIcon width={40} height={40} className="hover:scale-110" title="ArrowLeftIcon" />
						<ArrowLongDownIcon width={40} height={40} className="hover:scale-110" title="ArrowLongDownIcon" />
						<ArrowLongLeftIcon width={40} height={40} className="hover:scale-110" title="ArrowLongLeftIcon" />
						<ArrowLongRightIcon width={40} height={40} className="hover:scale-110" title="ArrowLongRightIcon" />
						<ArrowLongUpIcon width={40} height={40} className="hover:scale-110" title="ArrowLongUpIcon" />
						<ArrowPathRoundedSquareIcon width={40} height={40} className="hover:scale-110" title="ArrowPathRoundedSquareIcon" />
						<ArrowPathIcon width={40} height={40} className="hover:scale-110" title="ArrowPathIcon" />
						<ArrowRightCircleIcon width={40} height={40} className="hover:scale-110" title="ArrowRightCircleIcon" />
						<ArrowRightEndOnRectangleIcon width={40} height={40} className="hover:scale-110" title="ArrowRightEndOnRectangleIcon" />
						<ArrowRightStartOnRectangleIcon width={40} height={40} className="hover:scale-110" title="ArrowRightStartOnRectangleIcon" />
						<ArrowRightIcon width={40} height={40} className="hover:scale-110" title="ArrowRightIcon" />
						<ArrowTopRightOnSquareIcon width={40} height={40} className="hover:scale-110" title="ArrowTopRightOnSquareIcon" />
						<ArrowTrendingDownIcon width={40} height={40} className="hover:scale-110" title="ArrowTrendingDownIcon" />
						<ArrowTrendingUpIcon width={40} height={40} className="hover:scale-110" title="ArrowTrendingUpIcon" />
						<ArrowUpCircleIcon width={40} height={40} className="hover:scale-110" title="ArrowUpCircleIcon" />
						<ArrowUpLeftIcon width={40} height={40} className="hover:scale-110" title="ArrowUpLeftIcon" />
						<ArrowUpOnSquareStackIcon width={40} height={40} className="hover:scale-110" title="ArrowUpOnSquareStackIcon" />
						<ArrowUpOnSquareIcon width={40} height={40} className="hover:scale-110" title="ArrowUpOnSquareIcon" />
						<ArrowUpRightIcon width={40} height={40} className="hover:scale-110" title="ArrowUpRightIcon" />
						<ArrowUpTrayIcon width={40} height={40} className="hover:scale-110" title="ArrowUpTrayIcon" />
						<ArrowUpIcon width={40} height={40} className="hover:scale-110" title="ArrowUpIcon" />
						<ArrowUturnDownIcon width={40} height={40} className="hover:scale-110" title="ArrowUturnDownIcon" />
						<ArrowUturnLeftIcon width={40} height={40} className="hover:scale-110" title="ArrowUturnLeftIcon" />
						<ArrowUturnRightIcon width={40} height={40} className="hover:scale-110" title="ArrowUturnRightIcon" />
						<ArrowUturnUpIcon width={40} height={40} className="hover:scale-110" title="ArrowUturnUpIcon" />
						<ArrowsPointingInIcon width={40} height={40} className="hover:scale-110" title="ArrowsPointingInIcon" />
						<ArrowsPointingOutIcon width={40} height={40} className="hover:scale-110" title="ArrowsPointingOutIcon" />
						<ArrowsRightLeftIcon width={40} height={40} className="hover:scale-110" title="ArrowsRightLeftIcon" />
						<ArrowsUpDownIcon width={40} height={40} className="hover:scale-110" title="ArrowsUpDownIcon" />
						<AtSymbolIcon width={40} height={40} className="hover:scale-110" title="AtSymbolIcon" />
						<BackspaceIcon width={40} height={40} className="hover:scale-110" title="BackspaceIcon" />
						<BackwardIcon width={40} height={40} className="hover:scale-110" title="BackwardIcon" />
						<BanknotesIcon width={40} height={40} className="hover:scale-110" title="BanknotesIcon" />
						<Bars2Icon width={40} height={40} className="hover:scale-110" title="Bars2Icon" />
						<Bars3BottomLeftIcon width={40} height={40} className="hover:scale-110" title="Bars3BottomLeftIcon" />
						<Bars3BottomRightIcon width={40} height={40} className="hover:scale-110" title="Bars3BottomRightIcon" />
						<Bars3CenterLeftIcon width={40} height={40} className="hover:scale-110" title="Bars3CenterLeftIcon" />
						<Bars3Icon width={40} height={40} className="hover:scale-110" title="Bars3Icon" />
						<Bars4Icon width={40} height={40} className="hover:scale-110" title="Bars4Icon" />
						<BarsArrowDownIcon width={40} height={40} className="hover:scale-110" title="BarsArrowDownIcon" />
						<BarsArrowUpIcon width={40} height={40} className="hover:scale-110" title="BarsArrowUpIcon" />
						<Battery0Icon width={40} height={40} className="hover:scale-110" title="Battery0Icon" />
						<Battery100Icon width={40} height={40} className="hover:scale-110" title="Battery100Icon" />
						<Battery50Icon width={40} height={40} className="hover:scale-110" title="Battery50Icon" />
						<BeakerIcon width={40} height={40} className="hover:scale-110" title="BeakerIcon" />
						<BellAlertIcon width={40} height={40} className="hover:scale-110" title="BellAlertIcon" />
						<BellSlashIcon width={40} height={40} className="hover:scale-110" title="BellSlashIcon" />
						<BellSnoozeIcon width={40} height={40} className="hover:scale-110" title="BellSnoozeIcon" />
						<BellIcon width={40} height={40} className="hover:scale-110" title="BellIcon" />
						<BoltSlashIcon width={40} height={40} className="hover:scale-110" title="BoltSlashIcon" />
						<BoltIcon width={40} height={40} className="hover:scale-110" title="BoltIcon" />
						<BookOpenIcon width={40} height={40} className="hover:scale-110" title="BookOpenIcon" />
						<BookmarkSlashIcon width={40} height={40} className="hover:scale-110" title="BookmarkSlashIcon" />
						<BookmarkSquareIcon width={40} height={40} className="hover:scale-110" title="BookmarkSquareIcon" />
						<BookmarkIcon width={40} height={40} className="hover:scale-110" title="BookmarkIcon" />
						<BriefcaseIcon width={40} height={40} className="hover:scale-110" title="BriefcaseIcon" />
						<BugAntIcon width={40} height={40} className="hover:scale-110" title="BugAntIcon" />
						<BuildingLibraryIcon width={40} height={40} className="hover:scale-110" title="BuildingLibraryIcon" />
						<BuildingOffice2Icon width={40} height={40} className="hover:scale-110" title="BuildingOffice2Icon" />
						<BuildingOfficeIcon width={40} height={40} className="hover:scale-110" title="BuildingOfficeIcon" />
						<BuildingStorefrontIcon width={40} height={40} className="hover:scale-110" title="BuildingStorefrontIcon" />
						<CakeIcon width={40} height={40} className="hover:scale-110" title="CakeIcon" />
						<CalculatorIcon width={40} height={40} className="hover:scale-110" title="CalculatorIcon" />
						<CalendarDaysIcon width={40} height={40} className="hover:scale-110" title="CalendarDaysIcon" />
						<CalendarIcon width={40} height={40} className="hover:scale-110" title="CalendarIcon" />
						<CameraIcon width={40} height={40} className="hover:scale-110" title="CameraIcon" />
						<ChartBarSquareIcon width={40} height={40} className="hover:scale-110" title="ChartBarSquareIcon" />
						<ChartBarIcon width={40} height={40} className="hover:scale-110" title="ChartBarIcon" />
						<ChartPieIcon width={40} height={40} className="hover:scale-110" title="ChartPieIcon" />
						<ChatBubbleBottomCenterTextIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleBottomCenterTextIcon" />
						<ChatBubbleBottomCenterIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleBottomCenterIcon" />
						<ChatBubbleLeftEllipsisIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleLeftEllipsisIcon" />
						<ChatBubbleLeftRightIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleLeftRightIcon" />
						<ChatBubbleLeftIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleLeftIcon" />
						<ChatBubbleOvalLeftEllipsisIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleOvalLeftEllipsisIcon" />
						<ChatBubbleOvalLeftIcon width={40} height={40} className="hover:scale-110" title="ChatBubbleOvalLeftIcon" />
						<CheckBadgeIcon width={40} height={40} className="hover:scale-110" title="CheckBadgeIcon" />
						<CheckCircleIcon width={40} height={40} className="hover:scale-110" title="CheckCircleIcon" />
						<CheckIcon width={40} height={40} className="hover:scale-110" title="CheckIcon" />
						<ChevronDoubleDownIcon width={40} height={40} className="hover:scale-110" title="ChevronDoubleDownIcon" />
						<ChevronDoubleLeftIcon width={40} height={40} className="hover:scale-110" title="ChevronDoubleLeftIcon" />
						<ChevronDoubleRightIcon width={40} height={40} className="hover:scale-110" title="ChevronDoubleRightIcon" />
						<ChevronDoubleUpIcon width={40} height={40} className="hover:scale-110" title="ChevronDoubleUpIcon" />
						<ChevronDownIcon width={40} height={40} className="hover:scale-110" title="ChevronDownIcon" />
						<ChevronLeftIcon width={40} height={40} className="hover:scale-110" title="ChevronLeftIcon" />
						<ChevronRightIcon width={40} height={40} className="hover:scale-110" title="ChevronRightIcon" />
						<ChevronUpDownIcon width={40} height={40} className="hover:scale-110" title="ChevronUpDownIcon" />
						<ChevronUpIcon width={40} height={40} className="hover:scale-110" title="ChevronUpIcon" />
						<CircleStackIcon width={40} height={40} className="hover:scale-110" title="CircleStackIcon" />
						<ClipboardDocumentCheckIcon width={40} height={40} className="hover:scale-110" title="ClipboardDocumentCheckIcon" />
						<ClipboardDocumentListIcon width={40} height={40} className="hover:scale-110" title="ClipboardDocumentListIcon" />
						<ClipboardDocumentIcon width={40} height={40} className="hover:scale-110" title="ClipboardDocumentIcon" />
						<ClipboardIcon width={40} height={40} className="hover:scale-110" title="ClipboardIcon" />
						<ClockIcon width={40} height={40} className="hover:scale-110" title="ClockIcon" />
						<CloudArrowDownIcon width={40} height={40} className="hover:scale-110" title="CloudArrowDownIcon" />
						<CloudArrowUpIcon width={40} height={40} className="hover:scale-110" title="CloudArrowUpIcon" />
						<CloudIcon width={40} height={40} className="hover:scale-110" title="CloudIcon" />
						<CodeBracketSquareIcon width={40} height={40} className="hover:scale-110" title="CodeBracketSquareIcon" />
						<CodeBracketIcon width={40} height={40} className="hover:scale-110" title="CodeBracketIcon" />
						<Cog6ToothIcon width={40} height={40} className="hover:scale-110" title="Cog6ToothIcon" />
						<Cog8ToothIcon width={40} height={40} className="hover:scale-110" title="Cog8ToothIcon" />
						<CogIcon width={40} height={40} className="hover:scale-110" title="CogIcon" />
						<CommandLineIcon width={40} height={40} className="hover:scale-110" title="CommandLineIcon" />
						<ComputerDesktopIcon width={40} height={40} className="hover:scale-110" title="ComputerDesktopIcon" />
						<CpuChipIcon width={40} height={40} className="hover:scale-110" title="CpuChipIcon" />
						<CreditCardIcon width={40} height={40} className="hover:scale-110" title="CreditCardIcon" />
						<CubeTransparentIcon width={40} height={40} className="hover:scale-110" title="CubeTransparentIcon" />
						<CubeIcon width={40} height={40} className="hover:scale-110" title="CubeIcon" />
						<CurrencyBangladeshiIcon width={40} height={40} className="hover:scale-110" title="CurrencyBangladeshiIcon" />
						<CurrencyDollarIcon width={40} height={40} className="hover:scale-110" title="CurrencyDollarIcon" />
						<CurrencyEuroIcon width={40} height={40} className="hover:scale-110" title="CurrencyEuroIcon" />
						<CurrencyPoundIcon width={40} height={40} className="hover:scale-110" title="CurrencyPoundIcon" />
						<CurrencyRupeeIcon width={40} height={40} className="hover:scale-110" title="CurrencyRupeeIcon" />
						<CurrencyYenIcon width={40} height={40} className="hover:scale-110" title="CurrencyYenIcon" />
						<CursorArrowRaysIcon width={40} height={40} className="hover:scale-110" title="CursorArrowRaysIcon" />
						<CursorArrowRippleIcon width={40} height={40} className="hover:scale-110" title="CursorArrowRippleIcon" />
						<DevicePhoneMobileIcon width={40} height={40} className="hover:scale-110" title="DevicePhoneMobileIcon" />
						<DeviceTabletIcon width={40} height={40} className="hover:scale-110" title="DeviceTabletIcon" />
						<DocumentArrowDownIcon width={40} height={40} className="hover:scale-110" title="DocumentArrowDownIcon" />
						<DocumentArrowUpIcon width={40} height={40} className="hover:scale-110" title="DocumentArrowUpIcon" />
						<DocumentChartBarIcon width={40} height={40} className="hover:scale-110" title="DocumentChartBarIcon" />
						<DocumentCheckIcon width={40} height={40} className="hover:scale-110" title="DocumentCheckIcon" />
						<DocumentDuplicateIcon width={40} height={40} className="hover:scale-110" title="DocumentDuplicateIcon" />
						<DocumentMagnifyingGlassIcon width={40} height={40} className="hover:scale-110" title="DocumentMagnifyingGlassIcon" />
						<DocumentMinusIcon width={40} height={40} className="hover:scale-110" title="DocumentMinusIcon" />
						<DocumentPlusIcon width={40} height={40} className="hover:scale-110" title="DocumentPlusIcon" />
						<DocumentTextIcon width={40} height={40} className="hover:scale-110" title="DocumentTextIcon" />
						<DocumentIcon width={40} height={40} className="hover:scale-110" title="DocumentIcon" />
						<EllipsisHorizontalCircleIcon width={40} height={40} className="hover:scale-110" title="EllipsisHorizontalCircleIcon" />
						<EllipsisHorizontalIcon width={40} height={40} className="hover:scale-110" title="EllipsisHorizontalIcon" />
						<EllipsisVerticalIcon width={40} height={40} className="hover:scale-110" title="EllipsisVerticalIcon" />
						<EnvelopeOpenIcon width={40} height={40} className="hover:scale-110" title="EnvelopeOpenIcon" />
						<EnvelopeIcon width={40} height={40} className="hover:scale-110" title="EnvelopeIcon" />
						<ExclamationCircleIcon width={40} height={40} className="hover:scale-110" title="ExclamationCircleIcon" />
						<ExclamationTriangleIcon width={40} height={40} className="hover:scale-110" title="ExclamationTriangleIcon" />
						<EyeDropperIcon width={40} height={40} className="hover:scale-110" title="EyeDropperIcon" />
						<EyeSlashIcon width={40} height={40} className="hover:scale-110" title="EyeSlashIcon" />
						<EyeIcon width={40} height={40} className="hover:scale-110" title="EyeIcon" />
						<FaceFrownIcon width={40} height={40} className="hover:scale-110" title="FaceFrownIcon" />
						<FaceSmileIcon width={40} height={40} className="hover:scale-110" title="FaceSmileIcon" />
						<FilmIcon width={40} height={40} className="hover:scale-110" title="FilmIcon" />
						<FingerPrintIcon width={40} height={40} className="hover:scale-110" title="FingerPrintIcon" />
						<FireIcon width={40} height={40} className="hover:scale-110" title="FireIcon" />
						<FlagIcon width={40} height={40} className="hover:scale-110" title="FlagIcon" />
						<FolderArrowDownIcon width={40} height={40} className="hover:scale-110" title="FolderArrowDownIcon" />
						<FolderMinusIcon width={40} height={40} className="hover:scale-110" title="FolderMinusIcon" />
						<FolderOpenIcon width={40} height={40} className="hover:scale-110" title="FolderOpenIcon" />
						<FolderPlusIcon width={40} height={40} className="hover:scale-110" title="FolderPlusIcon" />
						<FolderIcon width={40} height={40} className="hover:scale-110" title="FolderIcon" />
						<ForwardIcon width={40} height={40} className="hover:scale-110" title="ForwardIcon" />
						<FunnelIcon width={40} height={40} className="hover:scale-110" title="FunnelIcon" />
						<GifIcon width={40} height={40} className="hover:scale-110" title="GifIcon" />
						<GiftTopIcon width={40} height={40} className="hover:scale-110" title="GiftTopIcon" />
						<GiftIcon width={40} height={40} className="hover:scale-110" title="GiftIcon" />
						<GlobeAltIcon width={40} height={40} className="hover:scale-110" title="GlobeAltIcon" />
						<GlobeAmericasIcon width={40} height={40} className="hover:scale-110" title="GlobeAmericasIcon" />
						<GlobeAsiaAustraliaIcon width={40} height={40} className="hover:scale-110" title="GlobeAsiaAustraliaIcon" />
						<GlobeEuropeAfricaIcon width={40} height={40} className="hover:scale-110" title="GlobeEuropeAfricaIcon" />
						<HandRaisedIcon width={40} height={40} className="hover:scale-110" title="HandRaisedIcon" />
						<HandThumbDownIcon width={40} height={40} className="hover:scale-110" title="HandThumbDownIcon" />
						<HandThumbUpIcon width={40} height={40} className="hover:scale-110" title="HandThumbUpIcon" />
						<HashtagIcon width={40} height={40} className="hover:scale-110" title="HashtagIcon" />
						<HeartIcon width={40} height={40} className="hover:scale-110" title="HeartIcon" />
						<HomeModernIcon width={40} height={40} className="hover:scale-110" title="HomeModernIcon" />
						<HomeIcon width={40} height={40} className="hover:scale-110" title="HomeIcon" />
						<IdentificationIcon width={40} height={40} className="hover:scale-110" title="IdentificationIcon" />
						<InboxArrowDownIcon width={40} height={40} className="hover:scale-110" title="InboxArrowDownIcon" />
						<InboxStackIcon width={40} height={40} className="hover:scale-110" title="InboxStackIcon" />
						<InboxIcon width={40} height={40} className="hover:scale-110" title="InboxIcon" />
						<InformationCircleIcon width={40} height={40} className="hover:scale-110" title="InformationCircleIcon" />
						<KeyIcon width={40} height={40} className="hover:scale-110" title="KeyIcon" />
						<LanguageIcon width={40} height={40} className="hover:scale-110" title="LanguageIcon" />
						<LifebuoyIcon width={40} height={40} className="hover:scale-110" title="LifebuoyIcon" />
						<LightBulbIcon width={40} height={40} className="hover:scale-110" title="LightBulbIcon" />
						<LinkIcon width={40} height={40} className="hover:scale-110" title="LinkIcon" />
						<ListBulletIcon width={40} height={40} className="hover:scale-110" title="ListBulletIcon" />
						<LockClosedIcon width={40} height={40} className="hover:scale-110" title="LockClosedIcon" />
						<LockOpenIcon width={40} height={40} className="hover:scale-110" title="LockOpenIcon" />
						<MagnifyingGlassCircleIcon width={40} height={40} className="hover:scale-110" title="MagnifyingGlassCircleIcon" />
						<MagnifyingGlassMinusIcon width={40} height={40} className="hover:scale-110" title="MagnifyingGlassMinusIcon" />
						<MagnifyingGlassPlusIcon width={40} height={40} className="hover:scale-110" title="MagnifyingGlassPlusIcon" />
						<MagnifyingGlassIcon width={40} height={40} className="hover:scale-110" title="MagnifyingGlassIcon" />
						<MapPinIcon width={40} height={40} className="hover:scale-110" title="MapPinIcon" />
						<MapIcon width={40} height={40} className="hover:scale-110" title="MapIcon" />
						<MegaphoneIcon width={40} height={40} className="hover:scale-110" title="MegaphoneIcon" />
						<MicrophoneIcon width={40} height={40} className="hover:scale-110" title="MicrophoneIcon" />
						<MinusCircleIcon width={40} height={40} className="hover:scale-110" title="MinusCircleIcon" />
						<MinusIcon width={40} height={40} className="hover:scale-110" title="MinusIcon" />
						<MoonIcon width={40} height={40} className="hover:scale-110" title="MoonIcon" />
						<MusicalNoteIcon width={40} height={40} className="hover:scale-110" title="MusicalNoteIcon" />
						<NewspaperIcon width={40} height={40} className="hover:scale-110" title="NewspaperIcon" />
						<NoSymbolIcon width={40} height={40} className="hover:scale-110" title="NoSymbolIcon" />
						<PaintBrushIcon width={40} height={40} className="hover:scale-110" title="PaintBrushIcon" />
						<PaperAirplaneIcon width={40} height={40} className="hover:scale-110" title="PaperAirplaneIcon" />
						<PaperClipIcon width={40} height={40} className="hover:scale-110" title="PaperClipIcon" />
						<PauseCircleIcon width={40} height={40} className="hover:scale-110" title="PauseCircleIcon" />
						<PauseIcon width={40} height={40} className="hover:scale-110" title="PauseIcon" />
						<PencilSquareIcon width={40} height={40} className="hover:scale-110" title="PencilSquareIcon" />
						<PencilIcon width={40} height={40} className="hover:scale-110" title="PencilIcon" />
						<PhoneArrowDownLeftIcon width={40} height={40} className="hover:scale-110" title="PhoneArrowDownLeftIcon" />
						<PhoneArrowUpRightIcon width={40} height={40} className="hover:scale-110" title="PhoneArrowUpRightIcon" />
						<PhoneXMarkIcon width={40} height={40} className="hover:scale-110" title="PhoneXMarkIcon" />
						<PhoneIcon width={40} height={40} className="hover:scale-110" title="PhoneIcon" />
						<PhotoIcon width={40} height={40} className="hover:scale-110" title="PhotoIcon" />
						<PlayCircleIcon width={40} height={40} className="hover:scale-110" title="PlayCircleIcon" />
						<PlayPauseIcon width={40} height={40} className="hover:scale-110" title="PlayPauseIcon" />
						<PlayIcon width={40} height={40} className="hover:scale-110" title="PlayIcon" />
						<PlusCircleIcon width={40} height={40} className="hover:scale-110" title="PlusCircleIcon" />
						<PlusIcon width={40} height={40} className="hover:scale-110" title="PlusIcon" />
						<PowerIcon width={40} height={40} className="hover:scale-110" title="PowerIcon" />
						<PresentationChartBarIcon width={40} height={40} className="hover:scale-110" title="PresentationChartBarIcon" />
						<PresentationChartLineIcon width={40} height={40} className="hover:scale-110" title="PresentationChartLineIcon" />
						<PrinterIcon width={40} height={40} className="hover:scale-110" title="PrinterIcon" />
						<PuzzlePieceIcon width={40} height={40} className="hover:scale-110" title="PuzzlePieceIcon" />
						<QrCodeIcon width={40} height={40} className="hover:scale-110" title="QrCodeIcon" />
						<QuestionMarkCircleIcon width={40} height={40} className="hover:scale-110" title="QuestionMarkCircleIcon" />
						<QueueListIcon width={40} height={40} className="hover:scale-110" title="QueueListIcon" />
						<RadioIcon width={40} height={40} className="hover:scale-110" title="RadioIcon" />
						<ReceiptPercentIcon width={40} height={40} className="hover:scale-110" title="ReceiptPercentIcon" />
						<ReceiptRefundIcon width={40} height={40} className="hover:scale-110" title="ReceiptRefundIcon" />
						<RectangleGroupIcon width={40} height={40} className="hover:scale-110" title="RectangleGroupIcon" />
						<RectangleStackIcon width={40} height={40} className="hover:scale-110" title="RectangleStackIcon" />
						<RocketLaunchIcon width={40} height={40} className="hover:scale-110" title="RocketLaunchIcon" />
						<RssIcon width={40} height={40} className="hover:scale-110" title="RssIcon" />
						<ScaleIcon width={40} height={40} className="hover:scale-110" title="ScaleIcon" />
						<ScissorsIcon width={40} height={40} className="hover:scale-110" title="ScissorsIcon" />
						<ServerStackIcon width={40} height={40} className="hover:scale-110" title="ServerStackIcon" />
						<ServerIcon width={40} height={40} className="hover:scale-110" title="ServerIcon" />
						<ShareIcon width={40} height={40} className="hover:scale-110" title="ShareIcon" />
						<ShieldCheckIcon width={40} height={40} className="hover:scale-110" title="ShieldCheckIcon" />
						<ShieldExclamationIcon width={40} height={40} className="hover:scale-110" title="ShieldExclamationIcon" />
						<ShoppingBagIcon width={40} height={40} className="hover:scale-110" title="ShoppingBagIcon" />
						<ShoppingCartIcon width={40} height={40} className="hover:scale-110" title="ShoppingCartIcon" />
						<SignalSlashIcon width={40} height={40} className="hover:scale-110" title="SignalSlashIcon" />
						<SignalIcon width={40} height={40} className="hover:scale-110" title="SignalIcon" />
						<SparklesIcon width={40} height={40} className="hover:scale-110" title="SparklesIcon" />
						<SpeakerWaveIcon width={40} height={40} className="hover:scale-110" title="SpeakerWaveIcon" />
						<SpeakerXMarkIcon width={40} height={40} className="hover:scale-110" title="SpeakerXMarkIcon" />
						<Square2StackIcon width={40} height={40} className="hover:scale-110" title="Square2StackIcon" />
						<Square3Stack3DIcon width={40} height={40} className="hover:scale-110" title="Square3Stack3DIcon" />
						<Squares2X2Icon width={40} height={40} className="hover:scale-110" title="Squares2X2Icon" />
						<SquaresPlusIcon width={40} height={40} className="hover:scale-110" title="SquaresPlusIcon" />
						<StarIcon width={40} height={40} className="hover:scale-110" title="StarIcon" />
						<StopCircleIcon width={40} height={40} className="hover:scale-110" title="StopCircleIcon" />
						<StopIcon width={40} height={40} className="hover:scale-110" title="StopIcon" />
						<SunIcon width={40} height={40} className="hover:scale-110" title="SunIcon" />
						<SwatchIcon width={40} height={40} className="hover:scale-110" title="SwatchIcon" />
						<TableCellsIcon width={40} height={40} className="hover:scale-110" title="TableCellsIcon" />
						<TagIcon width={40} height={40} className="hover:scale-110" title="TagIcon" />
						<TicketIcon width={40} height={40} className="hover:scale-110" title="TicketIcon" />
						<TrashIcon width={40} height={40} className="hover:scale-110" title="TrashIcon" />
						<TrophyIcon width={40} height={40} className="hover:scale-110" title="TrophyIcon" />
						<TruckIcon width={40} height={40} className="hover:scale-110" title="TruckIcon" />
						<TvIcon width={40} height={40} className="hover:scale-110" title="TvIcon" />
						<UserCircleIcon width={40} height={40} className="hover:scale-110" title="UserCircleIcon" />
						<UserGroupIcon width={40} height={40} className="hover:scale-110" title="UserGroupIcon" />
						<UserMinusIcon width={40} height={40} className="hover:scale-110" title="UserMinusIcon" />
						<UserPlusIcon width={40} height={40} className="hover:scale-110" title="UserPlusIcon" />
						<UserIcon width={40} height={40} className="hover:scale-110" title="UserIcon" />
						<UsersIcon width={40} height={40} className="hover:scale-110" title="UsersIcon" />
						<VariableIcon width={40} height={40} className="hover:scale-110" title="VariableIcon" />
						<VideoCameraSlashIcon width={40} height={40} className="hover:scale-110" title="VideoCameraSlashIcon" />
						<VideoCameraIcon width={40} height={40} className="hover:scale-110" title="VideoCameraIcon" />
						<ViewColumnsIcon width={40} height={40} className="hover:scale-110" title="ViewColumnsIcon" />
						<ViewfinderCircleIcon width={40} height={40} className="hover:scale-110" title="ViewfinderCircleIcon" />
						<WalletIcon width={40} height={40} className="hover:scale-110" title="WalletIcon" />
						<WifiIcon width={40} height={40} className="hover:scale-110" title="WifiIcon" />
						<WindowIcon width={40} height={40} className="hover:scale-110" title="WindowIcon" />
						<WrenchScrewdriverIcon width={40} height={40} className="hover:scale-110" title="WrenchScrewdriverIcon" />
						<WrenchIcon width={40} height={40} className="hover:scale-110" title="WrenchIcon" />
						<XCircleIcon width={40} height={40} className="hover:scale-110" title="XCircleIcon" />
						<XMarkIcon width={40} height={40} className="hover:scale-110" title="XMarkIcon" />
					</div>
				</div>
			</article>
		</div>
	);
}
